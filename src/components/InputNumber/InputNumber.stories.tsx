import { ComponentStory } from '@storybook/react'
import InputNumber from './InputNumber'
import './InputNumber.styles.scss'

export default {
  title: 'Input/InputNumber',
  component: InputNumber,
}

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'Input Number',
  label: 'Input Number',
  labelPosition: 'top',
  min: -10,
  max: 10,
  step: 0.5,
}
