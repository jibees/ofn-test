export interface ProductApi {
  id: number;
  name: string;
  permalink: string;
  description: string;
  price: string;
  unit_value: number;
  unit_to_display: string;
  on_hand: number;
  taxon: {
    id: number;
    name: string;
    permalink: string;
  };
  images: {
    id: number;
    alt: string;
    thumb_url: string;
    small_url: string;
    image_url: string;
    large_url: string;
  };
}

export const mockProductList = [
  {
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
      thumb_url: "./images/garlic.png",
      small_url:
        "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
      image_url:
        "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
      large_url:
        "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
    },
  },
  {
    id: 5,
    name: "Potatoes",
    permalink: "potatoes",
    description:
      "This potates are suitable for frying. Perfect for your tortillas de patatas",
    price: "1.5",
    unit_value: 1000,
    unit_to_display: "1kg",
    on_hand: 64,
    taxon: {
      id: 2,
      name: "Vegetables",
      permalink: "products/vegetables",
    },
    images: {
      id: 2,
      alt: "a bunch of potates",
      thumb_url: "./images/potatoes.png",
      small_url:
        "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
      image_url:
        "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
      large_url:
        "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
    },
  },
  {
    id: 6,
    name: "Tomatoes",
    permalink: "tomatoes",
    description: "Excelent choice for a fresh salad",
    price: "2.2",
    unit_value: 500,
    unit_to_display: "500g",
    on_hand: 92,
    taxon: {
      id: 3,
      name: "Fruits",
      permalink: "products/fruits",
    },
    images: {
      id: 3,
      alt: "shinny tomates",
      thumb_url: "./images/tomatoes.png",
      small_url:
        "https://staging.openfoodfrance.org/spree/products/94/small/OFF.png",
      image_url:
        "https://staging.openfoodfrance.org/spree/products/94/product/OFF.png",
      large_url:
        "https://staging.openfoodfrance.org/spree/products/94/large/OFF.png",
    },
  },
];

export function getProductList() {
  return Promise.resolve(mockProductList);
}
