import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color'
    },
  },
  parameters: {
    // Add the story source addon
    // See https://storybook.js.org/docs/react/writing-stories/introduction#using-args for more info
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: true,
  label: 'Button',
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  className: 'contained',
};