import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Product, ProductProps } from "./Product";

export default {
  title: "Example/Product",
  component: Product,
} as Meta;

const Template: Story<ProductProps> = (args) => <Product {...args} />;

export const Garlic = Template.bind({});
Garlic.args = {
  id: 1,
  name: "Garlic",
  image: "./images/garlic.png",
  description: "Useful to scare vampires",
  price: "0.5",
  quantity: "100g",
  family: "Vegetables",
};
Garlic.argTypes = { addToCartHandler: { action: "Add to 'My cart" } };

export const Potatoes = Template.bind({});
Potatoes.args = {
  id: 5,
  name: "Potatoes",
  image: "./images/potatoes.png",
  description:
    "This potatoes are suitable for frying. Perfect for your tortillas de patatas",
  price: "0.5",
  quantity: "1kg",
  family: "Vegetables",
};
Potatoes.argTypes = { addToCartHandler: { action: "Add to 'My cart" } };

export const Tomatoes = Template.bind({});
Tomatoes.args = {
  id: 6,
  name: "Tomatoes",
  image: "./images/tomatoes.png",
  description: "Excellent choice for a fresh salad",
  price: "2.20",
  quantity: "500g",
  family: "Fruits",
};
Tomatoes.argTypes = { addToCartHandler: { action: "Add to 'My cart" } };

export const TomatoesInMyCart = Template.bind({});
TomatoesInMyCart.args = {
  id: 6,
  name: "Tomatoes",
  image: "./images/tomatoes.png",
  description: "Excellent choice for a fresh salad",
  price: "2.20",
  quantity: "500g",
  family: "Fruits",
  inMyCart: true,
};
TomatoesInMyCart.argTypes = { removeHandler: { action: "Remove" } };
