import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Header, HeaderProps } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    myCartHandler: { action: "'My Cart' clicked" },
    logoHandler: { action: "Logo clicked" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemsCount: 0,
};

export const WithProducts = Template.bind({});
WithProducts.args = {
  itemsCount: 2,
};
