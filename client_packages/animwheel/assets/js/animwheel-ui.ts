import { IAnimationDataProvider } from './animation-data-providers/animation-data-provider';
import { RageRpcAnimationDataProvider } from './animation-data-providers/rage-rpc-animation-data-provider';
import { StaticTestAnimationDataProvider } from './animation-data-providers/static-test-animation-data-provider';
import { AnimationCategory, Animation } from 'ragemp-animwheel-types';

/* Consts */
const minimumCategoryCircles = 5;
const itemRadius = 96;


/* Classes */
abstract class WheelItem {
    public x: number;
    public y: number;

    constructor(public text: string, public icon: string) {
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    hovered() {

    }

    clicked() {

    }
}

class CategoryWheelItem extends WheelItem {
    constructor(public text: string, public icon: string, private children: WheelItem[]) {
        super(text, icon);
    }
}

class AnimationCategoryWheelItem extends CategoryWheelItem {
    constructor(public categoryInfo: AnimationCategory) {
        super(
            categoryInfo.name,
            categoryInfo.icon,
            categoryInfo.animations.map(animation => new AnimationWheelItem(animation))
        );
    }
}

class AnimationWheelItem extends WheelItem {
    constructor(public animationInfo: Animation) {
        super(animationInfo.name, animationInfo.icon);
    }
}

// A base class for the logic of wheels, responsible for deciding coordinates for each item
abstract class Wheel {
    private items: WheelItem[];
    private radius: number;

    constructor(private containerRadius: number) {
        // The radius of the wheel is smaller than its container because we need to leave some space for the items
        this.radius = containerRadius - (itemRadius / 2);

        this.items = new Array();
    }

    // Calculate position on the wheel for a specific item
    private getPositionForItem(itemIndex: number, totalItemCount: number) {
        const itemCount = Math.max(minimumCategoryCircles, totalItemCount);

        let rotation = (Math.PI * 2) / itemCount;
        rotation *= itemIndex;
        rotation -= (Math.PI / 2);

        return [this.radius + this.radius * Math.cos(rotation), this.radius + this.radius * Math.sin(rotation)];
    }

    // Position on all items on the wheel based on their index
    private positionItems() {
        for (let i = 0; i < this.items.length; i++) {
            const [x, y] = this.getPositionForItem(i, this.items.length);
            this.items[i].setPosition(x, y);
        }
    }

    abstract wheelItemFactory(item): WheelItem;

    insertItems(dataItems: object[], index = 0): WheelItem[] {
        // Add the items at the specified index
        this.items.splice(
            index,
            0,
            // Create WheelItem instances for each data item and insert them
            ...dataItems.map(dataItem => this.wheelItemFactory(dataItem))
        );

        // Reposition all items on the wheel
        this.positionItems();

        // Return the WheelItem instances created earlier
        return this.items.slice(index, dataItems.length);
    }

    addItems(dataItems: any[]): WheelItem[] {
        /**
         * Adds data items to the "end" of the wheel (last index)
         *
         * @returns The wheel items that were created for the provided data items
         */
        return this.insertItems(dataItems, this.items.length);
    }

    addItem(dataItem: any): WheelItem {
        return this.addItems(new Array(dataItem))[0];
    }
}

class AnimationWheel extends Wheel {
    wheelItemFactory(item: any) {
        if (item.animations) {
            return new AnimationCategoryWheelItem(item as AnimationCategory);
        }
        else {
            return new AnimationWheelItem(item as Animation);
        }
    }
}

class Controller {
    private categoriesWheel: Wheel;
    private currentWheel: Wheel;

    constructor(private animationDataProvider: IAnimationDataProvider) {

    }

    // When a wheel item is hovered, its name appears at the center of the wheel
    handleItemHover(item: WheelItem) {
        $('#current-category-name').text(item.text);
    }

    handleItemClicked(item: WheelItem) {
        if (item instanceof AnimationCategoryWheelItem) {
            // Clear out previous wheel
            // TODO: Hide categories instead of clearing because they might appear again soon
            $("#wheel-container > *:not('.current-category')").remove();

            // Clear current category text label
            $('#current-category-name').text('');

            // Create a new wheel with the animations as items
            this.currentWheel = this.createWheel((item as AnimationCategoryWheelItem).categoryInfo.animations);
        }
        else {
            this.animationDataProvider.playAnimation((item as AnimationWheelItem).animationInfo);
        }
    }

    onAnimationClick(animation: Animation) {
        this.animationDataProvider.playAnimation(animation);
    }

    private createWheelItemContainerFromTemplate(wheelItem: WheelItem): JQuery<HTMLElement> {
        const categoryTemplateContainer = $('<div>');

        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        categoryTemplateContainer.loadTemplate($('#category-template'), wheelItem);

        // Position the item on the wheel
        categoryTemplateContainer.css('position', 'absolute');
        categoryTemplateContainer.css('left', `${wheelItem.x}px`);
        categoryTemplateContainer.css('top', `${wheelItem.y}px`);

        // Register events for interaction with the item
        categoryTemplateContainer.mouseenter(() => { this.handleItemHover(wheelItem) });
        categoryTemplateContainer.click(() => { this.handleItemClicked(wheelItem) });

        return categoryTemplateContainer;
    }

    private createWheel(items: any[]): Wheel {
        const wheelContainer = $('#wheel-container');

        // Calculate the container's diameter
        const idealContainerDiameter = (items.length / 2) * (itemRadius + 16);
        const containerDiameter = Math.max(idealContainerDiameter, wheelContainer.height())

        // Place the wheel in the center of the window
        wheelContainer.css({
            left: ($(window).width() - containerDiameter) / 2,
            top: ($(window).height() - containerDiameter) / 2,
            width: containerDiameter,
            height: containerDiameter
        });

        // Vertically center the current-category text label
        $('.current-category').css('top', `${containerDiameter / 2}px`);

        const wheel = new AnimationWheel(wheelContainer.width() / 2);
        wheel.addItems(items).forEach(wheelItem => {
            // Create a DIV element to present the wheel item
            const wheelItemContainer = this.createWheelItemContainerFromTemplate(wheelItem);

            // Add the item to the page
            wheelItemContainer.appendTo(wheelContainer);
        });

        return wheel;
    }

    async setupCategoriesWheel() {
        const animationCategories = await this.animationDataProvider.getCategories();
        this.categoriesWheel = this.createWheel(animationCategories);

        // Remove loading indication
        $('#loading-spinner').remove();
    }
}

const controller = new Controller(new RageRpcAnimationDataProvider());
// const controller = new Controller(new StaticTestAnimationDataProvider());
// Setup the initial wheel, which is the one that displays animation categories
controller.setupCategoriesWheel();
