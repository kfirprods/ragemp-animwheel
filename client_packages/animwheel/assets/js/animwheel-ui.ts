import { RageRpcAnimationDataProvider } from './animation-data-providers/rage-rpc-animation-data-provider';
import { IAnimationDataProvider } from './animation-data-providers/animation-data-provider';
import AnimwheelSlot from '../../models/animwheel-slot.type';
import InvalidAnimationNameError from './animation-data-providers/invalid-animation-name.exception';


/* Consts */
const minimumWheelItems = 5;
const itemRadius = 96; // TODO: Get that from the CSS class using JQuery

/* Classes */
abstract class WheelItem {
    public x: number;
    public y: number;

    constructor(public id: any, public text: string, public icon: string) {
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class AnimationWheelItem extends WheelItem {
    constructor(public favoriteAnimation: AnimwheelSlot) {
        super(favoriteAnimation.slot, favoriteAnimation.animation, getIconForCategory(favoriteAnimation.category));
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
        const itemCount = Math.max(minimumWheelItems, totalItemCount);

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

    insertItems(dataItems: any[], index = 0): WheelItem[] {
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

    replaceItem(existingItem: WheelItem, newDataItem: any): [WheelItem, WheelItem] {
        const oldWheelItemIndex = this.items.indexOf(existingItem);
        const oldWheelItem = this.items[oldWheelItemIndex];
        const newWheelItem = this.wheelItemFactory(newDataItem);
        newWheelItem.setPosition(oldWheelItem.x, oldWheelItem.y);

        this.items.splice(oldWheelItemIndex, 1, newWheelItem);

        return [oldWheelItem, newWheelItem];
    }
}

class AnimationWheel extends Wheel {
    wheelItemFactory(item: any) {
        return new AnimationWheelItem(item as AnimwheelSlot);
    }
}

class Controller {
    wheel: Wheel;

    constructor(private animationDataProvider: IAnimationDataProvider) {
    }

    // When a wheel item is hovered, its name appears at the center of the wheel
    private handleItemHover(item: WheelItem) {
        $('#current-wheelitem-name').text(item.text);
    }

    private handleItemClicked(item: WheelItem) {
        const animWheelItem = item as AnimationWheelItem;
        this.animationDataProvider.playAnimation(animWheelItem.favoriteAnimation.animation);
    }

    private handleItemEdit(item: WheelItem) {
        const animWheelItem = item as AnimationWheelItem;

        $('#apply-edit-button').unbind('click');
        $('#cancel-edit-button').unbind('click');

        // TODO: Move to editor component
        this.animationDataProvider.notifyEditorVisibility(true);
        $('#item-editor').show();
        $('#item-editor').css('display', 'flex');
        $('#edit-text').val(animWheelItem.favoriteAnimation.animation);
        $('#editor-current-animation-label').text(animWheelItem.favoriteAnimation.animation);
        $('#edit-text').focus();
        $('#editor-current-animation-label').val(animWheelItem.favoriteAnimation.animation);

        $('#apply-edit-button').unbind('click');
        $('#cancel-edit-button').unbind('click');
        $('#edit-text').unbind('keypress');

        $('#apply-edit-button').click(() => { this.handleEditApply(animWheelItem); });
        $('#cancel-edit-button').click(() => { this.handleEditCancel(); });

        // Allow hitting enter in the textbox to apply
        $('#edit-text').keypress(e => {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 13) { // On ENTER
                this.handleEditApply(animWheelItem);
            }
        });

        this.animationDataProvider.OnEscape.on(()=>{
            this.handleEditCancel();
        });
    }

    // TODO: Move to gui managing component
    private createWheelItemContainerFromTemplate(wheelItem: WheelItem): JQuery<HTMLElement> {
        const wheelItemTemplateContainer = $(`<div data-id="${wheelItem.id}">`);

        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        wheelItemTemplateContainer.loadTemplate($('#wheelitem-template'), wheelItem);

        // Position the item on the wheel
        wheelItemTemplateContainer.css('position', 'absolute');
        wheelItemTemplateContainer.css('left', `${wheelItem.x}px`);
        wheelItemTemplateContainer.css('top', `${wheelItem.y}px`);

        // Register events for interaction with the item
        wheelItemTemplateContainer.mouseenter(() => { this.handleItemHover(wheelItem) });
        wheelItemTemplateContainer.find('.wheelitem-circle-container').click(() => { this.handleItemClicked(wheelItem) });
        wheelItemTemplateContainer.find('.wheelitem-edit-button').click(() => { this.handleItemEdit(wheelItem) });

        return wheelItemTemplateContainer;
    }

    private replaceExistingWheelItem(existingWheelItem: WheelItem, newWheelItem: WheelItem) {
        const wheelContainer = $('#wheel-container');

        // Remove existing item
        $(`div[data-id="${existingWheelItem.id}"]`).remove();

        // Create the new one in its place
        const newContainer = this.createWheelItemContainerFromTemplate(newWheelItem);
        newContainer.appendTo(wheelContainer);
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

        // Vertically center the text label that displays the current item's text
        $('.current-wheelitem').css('top', `${containerDiameter / 2}px`);

        const wheel = new AnimationWheel(wheelContainer.width() / 2);
        wheel.addItems(items).forEach(wheelItem => {
            // Create a DIV element to present the wheel item
            const wheelItemContainer = this.createWheelItemContainerFromTemplate(wheelItem);

            // Add the item to the page
            wheelItemContainer.appendTo(wheelContainer);
        });

        return wheel;
    }

    async setupWheel() {
        // Ask the client for the favorite animations list
        let favoriteAnimations = await this.animationDataProvider.getFavoriteAnimations();

        // Sort them by the slot index
        favoriteAnimations = favoriteAnimations.sort(favoriteAnimation => favoriteAnimation.slot);

        this.wheel = this.createWheel(favoriteAnimations);
    }

    private handleEditApply(animWheelItem: AnimationWheelItem) {
        const newAnimationActionName = $('#edit-text').val() as string;
        $('#loading-spinner').css('visibility', 'visible');

        this.animationDataProvider.updateFavoriteAnimation(
            animWheelItem.favoriteAnimation.slot,
            newAnimationActionName
        ).then(newAnimationSlot => {
            var replacement = this.wheel.replaceItem(animWheelItem, newAnimationSlot);
            this.replaceExistingWheelItem(replacement[0], replacement[1]);

            $('#editor-error-message').css('visibility', 'hidden');
            $('#edit-text').val("");
            $('#item-editor').hide();
            $('#loading-spinner').css('visibility', 'hidden');
            this.animationDataProvider.notifyEditorVisibility(false);
        }).catch(reason => {
            console.log(reason);
            $('#editor-error-message').css('visibility', 'visible');
            $('#loading-spinner').css('visibility', 'hidden');
        });
    }

    private handleEditCancel() {
        $('#editor-error-message').css('visibility', 'hidden');
            $('#edit-text').val("");
            $('#item-editor').hide();
        this.animationDataProvider.notifyEditorVisibility(false);
    }
}

const controller = new Controller(new RageRpcAnimationDataProvider());
controller.setupWheel();

function getIconForCategory(category: string): string {
    switch (category.toLowerCase()) {
        case "food & drink": {
            category = "food.svg";
            break;
        }
        case "ground": {
            category = "laying.svg";
            break;
        }

    }

    return `assets/img/categories/${category.toLowerCase()}.svg`;
}
