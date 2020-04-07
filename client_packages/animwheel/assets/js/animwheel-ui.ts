/* Consts */
const minimumCategoryCircles = 5;
const itemRadius = 96;

/* Classes */
class WheelItem {
    public x: number;
    public y: number;
}

// TODO: Create class for WheelItem that has children

class CategoryWheelItem extends WheelItem {

    constructor(private categoryInfo: any) {
        super();
    }


}

// TODO: This class should manage a list of WheelItem instances (and that way not depend on 'totalItems' in its constructor)
class WheelController {
    private wheelRadius: number;

    constructor(private containerRadius: number, private totalItems: number) {
        // The radius of the wheel is smaller than its container because we need to leave some space for the items
        this.wheelRadius = containerRadius - (itemRadius / 2);
    }

    // Calculate 
    getPositionForItem(itemIndex: number) {
        const itemCount = Math.max(minimumCategoryCircles, this.totalItems);

        let rotation = (Math.PI * 2) / itemCount;
        rotation *= itemIndex;
        rotation -= (Math.PI / 2);

        console.log(`${itemIndex} rotation is ${rotation}`);

        return [this.wheelRadius + this.wheelRadius * Math.cos(rotation), this.wheelRadius + this.wheelRadius * Math.sin(rotation)];
    }
}



// When a category is hovered its name appears at the center of the wheel
function onCategoryHover(mouseEvent) {
    const categoryContainer = mouseEvent.currentTarget;
    const categoryNameLabel = $(categoryContainer).find('.category-name');
    const categoryName = categoryNameLabel.text();

    $('#current-category-name').text(categoryName);
}

function onCategoryClick(mouseEvent) {
    const categoryContainer = mouseEvent.currentTarget;
    const categoryNameLabel = $(categoryContainer).find('.category-name');
    const categoryName = categoryNameLabel.text();

    // TODO: Ask the server how to proceed, or better yet have that data ahead of time
}

// TODO: Move this to a Controller class
async function setupWheel() {
    // Get animation categories from server via rage-rpc
    // TODO: Show some loading indicator while waiting for the server's response
    const animationCategories: Array<any> = await rpc.callServer('getAnimationWheelCategories');
    const wheelContainer = $('#wheel-container');

    // The container is a square that is position at the center of the screen
    const idealContainerDiameter = (animationCategories.length / 2) * (itemRadius + 16);
    const containerDiameter = Math.max(idealContainerDiameter, wheelContainer.height())
    wheelContainer.css({
        left: ($(window).width() - containerDiameter) / 2,
        top: ($(window).height() - containerDiameter) / 2,
        width: containerDiameter,
        height: containerDiameter
    });

    $('.current-category').css('top', `${containerDiameter / 2}px`);

    const wheelManager = new WheelController(wheelContainer.width() / 2, animationCategories.length);

    animationCategories.forEach((animationCategory, index) => {
        const categoryTemplateContainer = $('<div>');

        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        categoryTemplateContainer.loadTemplate($('#category-template'), animationCategory);

        // Position the item on the wheel
        const categoryPosition = wheelManager.getPositionForItem(index);
        categoryTemplateContainer.css('position', 'absolute');
        categoryTemplateContainer.css('left', `${categoryPosition[0]}px`);
        categoryTemplateContainer.css('top', `${categoryPosition[1]}px`);

        // Register events for interaction with the item
        categoryTemplateContainer.mouseenter(onCategoryHover);
        categoryTemplateContainer.click(onCategoryClick);

        // Add the item to the page
        categoryTemplateContainer.appendTo(wheelContainer);
    });
}

setupWheel();
