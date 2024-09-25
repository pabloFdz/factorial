function getPrice(element) {
    let price = element.attr("data-element-price") ? element.attr("data-element-price") : 0;
    price += "€"

    return price;
}

let priceRules = [];

// selected/clicked element, dependency, price
defineRule(["matte", "full-suspension", 50]);
defineRule(["red", "full-suspension", 30]);

function defineRule(rule) {
    priceRules.push(rule);
}

function checkRules(element) {
    priceRules.forEach(rule => {
        let element = $(`[data-element-name=${rule[0]}]`);
        let dependency = $(`[data-element-name=${rule[1]}]`);
    
        if (element.hasClass("selected")) {
            let type = getCategoryTitle(element);
            if (dependency.hasClass("selected")) {
                let price = rule[2] + "€";
                let visualizerCategory = $(`[data-visualizer-name=${type}] .visualizer-container .visualizer-price`);
                visualizerCategory.html(price)
            }
            else {
                let visualizerCategory = $(`[data-visualizer-name=${type}] .visualizer-container .visualizer-price`);
                price = getPrice(element);
                visualizerCategory.html(price);
            }
        }
    });
}

function getCategoryTitle(element) {
    return element.parent().prev("[data-element-title]").attr("data-element-title");
}

function pricesSummatory() {
    //
    let total = 0;
    $(".visualizer-price-item").each(function() {
        total += $(this).text().replace("€", "") !== "" ? parseInt($(this).text().replace("€", "")) : 0
        //total += parseInt($(this).text().replace("€", ""));
        
    });
    ELEMENT_TOTAL_PRICE.text(total + "€");
}