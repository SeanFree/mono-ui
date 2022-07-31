import { ComponentStory } from '@storybook/react'
import Select from './Select'
import './Select.styles.scss'

export default {
  title: 'Input/Select',
  component: Select,
}

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'Select',
  id: 'combo-1',
  label: 'Select',
  labelPosition: 'top',
  options: Array.from({ length: 10 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: i + 1,
  })),
}
