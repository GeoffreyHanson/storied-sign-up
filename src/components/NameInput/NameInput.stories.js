import React from 'react';
import NameInput from './NameInput';

export default {
  title: 'components/NameInput',
  component: NameInput,
  argTypes: {
    borderColor: { control: 'color' },
  },
};

const Template = (args) => <NameInput {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  primary: true,
  placeholder: 'NAME',
  filled: false,
}

export const Filled = Template.bind({});
Filled.args = {
  // name: 'Geoffrey',
  filled: true,
}