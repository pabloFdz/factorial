$(".accordion").click(function() {
    $(this).toggleClass("active");
    $(this).next(".panel").toggle()
});

$(".element").click(function() {
    let element = $(this);
    if ($(element).hasClass("disabled")) {
        return;
    }

    removePreviousBlocks(element);
    addCurrentBlocks(element);

    addElementToVisualizer(element);
    checkRules(element);
    pricesSummatory();
});

// Manage Products Images
$("[data-element-image=true]").on("mouseover", function() {
    ELEMENT_FLOATING_PRODUCT.show();
    $("img#floating-product").attr('src', generateImagePath($(this)));
    ELEMENT_FLOATING_PRODUCT.css('top', getProductPositionY($(this)));
    ELEMENT_FLOATING_PRODUCT.css('left', getProductPositionX());

    if ($(this).hasClass("disabled")) {
        ELEMENT_FLOATING_PRODUCT.addClass("disabled");
    }
});

$("[data-element-image=true]").on("mouseout", function() {
    ELEMENT_FLOATING_PRODUCT.hide();
    ELEMENT_FLOATING_PRODUCT.removeClass("disabled");
});