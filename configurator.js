function toggleElementStatus(elementToCheck) {
    if (!$(elementToCheck).attr("data-element-blocks")) {
        return;
    }

    let blockedElements = $(elementToCheck).attr("data-element-blocks").split(",");
    blockedElements.forEach(element => {
        $(`[data-element-name=${element}]`).toggleClass("disabled");
    });
}

function removePreviousBlocks(element) {
    // Remove previous blocks
    toggleElementStatus(element.siblings(".selected"));
    element.siblings(".selected").removeClass("selected");
}
function addCurrentBlocks(element) {
    // Add element blocks
    element.addClass("selected");
    toggleElementStatus(element);
}

function generateImagePath(element) {
    let dataImagePath = $(element).parent().attr('data-image-path');
    let dataElementName = $(element).attr('data-element-name');
    
    let path = `images/${dataImagePath}/${dataElementName}`;
    let src = path + imageExtension;

    return src;
}

function getProductPositionX() {
    let configuratorPositionX = $("#configurator").offset().left;
    configuratorPositionX = configuratorPositionX - $(".floating-product").width();
    configuratorPositionX = configuratorPositionX + CONFIGURATOR_ARROW_SIZE;
    let css = `calc(${configuratorPositionX}px - 1.65em)`

    return css;
}
function getProductPositionY(element) {
    let paragraphPositionY = $(element).offset().top;
    let paragraphMargin = $(element).css("margin-top").replace("px", "") / 2;
    let productHeight = $("img#floating-product").height() / 2;

    let finalPosition = paragraphPositionY + paragraphMargin - productHeight;
    finalPosition += "px";

    return finalPosition;
}