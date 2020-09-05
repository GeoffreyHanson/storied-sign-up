import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  // Directory/category of component to display in Storybook.
  title: 'Components/SubmitButton',
  // Linking the component itself.
  component: SubmitButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// Dynamically returning components based on the arguments.
const Template = (args) => <SubmitButton {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'NEXT',
// }

// The button with an empty form.
export const EmptyForm = Template.bind({});
EmptyForm.args = {
  primary: true,
  label: 'NEXT',
  completion: 'empty-form',
}

// One field filled.
export const OneField = Template.bind({});
OneField.args = {
  label: 'NEXT',
  completion: 'one-field',
}

// Two fields filled.
export const TwoFields = Template.bind({});
TwoFields.args = {
  label: 'NEXT',
  completion: 'two-fields',
}

// All fields filled.
export const FilledForm = Template.bind({});
FilledForm.args = {
  label: 'NEXT',
  completion: 'filled-form',
}