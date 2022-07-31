import { ComponentStory } from '@storybook/react'
import Range from './Range'
import './Range.styles.scss'

export default {
  title: 'Input/Range',
  component: Range,
}

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'Range',
  label: 'Range',
  labelPosition: 'top',
  min: -10,
  max: 10,
  step: 0.5,
}
