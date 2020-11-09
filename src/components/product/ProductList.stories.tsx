import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ProductList, ProductListProps } from "./ProductList";

export default {
  title: "Example/ProductList",
  component: ProductList,
} as Meta;

const Template: Story<ProductListProps> = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      id: 1,
      name: "Garlic",
      image: "./images/garlic.png",
      description: "Useful to scare vampires",
      price: "0.5",
      quantity: "100g",
      family: "Vegetables",
    },
    {
      id: 5,
      name: "Potatoes",
      image: "./images/potatoes.png",
      description:
        "This potatoes are suitable for frying. Perfect for your tortillas de patatas",
      price: "0.5",
      quantity: "1kg",
      family: "Vegetables",
    },
    {
      id: 6,
      name: "Tomatoes",
      image: "./images/tomatoes.png",
      description: "Excellent choice for a fresh salad",
      price: "2.20",
      quantity: "500g",
      family: "Fruits",
    },
  ],
};
