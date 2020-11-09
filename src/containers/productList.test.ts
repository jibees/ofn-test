import { fromApiToComponentMapper } from "./ProductList";

const productFromApi = {
      id: 1,
      name: "Garlic",
      permalink: "garlic",
      description: "Useful to scare vampires",
      price: "0.5",
      unit_value: 100,
      unit_to_display: "100g",
      on_hand: 5,
      taxon: {
        id: 2,
        name: "Vegetables",
        permalink: "products/vegetables",
      },
      images: {
        id: 1,
        alt: "a garlic",
        thumb_url:
          "./images/garlic.png",
        small_url:
          "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
        image_url:
          "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
        large_url:
          "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
      },
}

const productForComponent = {
  id: 1,
  name: "Garlic",
  image: "./images/garlic.png",
  description: "Useful to scare vampires",
  price: "0.5",
  quantity: "100g",
  family: "Vegetables"
}

it("Test fromApiToComponentMapper", () => {
    expect([productFromApi].map(fromApiToComponentMapper)).toEqual([productForComponent]);
});