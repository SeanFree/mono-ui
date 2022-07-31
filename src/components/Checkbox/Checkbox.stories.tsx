import { ComponentStory } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
}

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'Checkbox',
  defaultChecked: true,
  id: 'chk-1',
  label: 'Checkbox',
  value: 'some-value',
}

export const Toggle = Template.bind({})
Toggle.args = {
  ariaLabel: 'Toggle',
  defaultChecked: true,
  id: 'chk-2',
  isToggle: true,
  label: 'Toggle',
  value: 'some-value',
}
