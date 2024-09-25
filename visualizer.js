function addElementToVisualizer(element) {
    let selectedElementName = element.text();
    //let price = element.attr("data-element-price") ? element.attr("data-element-price") : 0;
    let type = element.parent().prev("[data-element-title]").attr("data-element-title");
    
    let visualizerElement = $(`[data-visualizer-title=${type}]`);
    visualizerElement.html(selectedElementName);

    let price = getPrice(element);
    visualizerElement.next("div").html(price);
}