import React from 'react';
import DateInput from './DateInput';

export default {
  title: 'components/DateInput',
  component: DateInput,
  argTypes: {
    borderColor: { control: 'color' },
  },
};

const Template = (args) => <DateInput {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  primary: true,
  placeholder: 'DATE OF BIRTH',
  filled: false,
}

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
}