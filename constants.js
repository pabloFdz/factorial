const configurator = 
{
    "configurator": {
        "elements": {
          "frame_type": [
            {"name": "full-suspension", "price": "130"},
            {"name": "diamond", "price": ""},
            {"name": "step-through", "price": ""}
          ],
          "frame_finish": [
            {"name": "matte", "price": ""},
            {"name": "shiny", "price": "30"}
          ],
          "wheels": [
            {"name": "road_wheels", "price": "80"},
            {"name": "mountain_wheels", "price": ""},
            {"name": "fat_bike", "price": ""}
          ],
          "rim_color": [
            {"name": "red", "price": "80"},
            {"name": "black", "price": ""},
            {"name": "blue", "price": "20"}
          ],
          "chain": [
            {"name": "single-speed", "price": "43"},
            {"name": "8-speed", "price": ""}
          ]
        },
        "rules": "No rules at the moment"
    }
};

const NAME = "name";
const PRICE = "price";
const imageExtension = ".avif";
const CONFIGURATOR_ARROW_SIZE = 14
const ELEMENT_TOTAL_PRICE = $(".visualizer-price-total");
const ELEMENT_FLOATING_PRODUCT = $(".floating-product");