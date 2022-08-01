import { ComponentStory } from '@storybook/react'
import SeekButton from './SeekButton'

export default {
  title: 'Media/SeekButton',
  component: SeekButton,
}

const Template: ComponentStory<typeof SeekButton> = (args) => (
  <SeekButton {...args} />
)

export const SeekButtonFill = Template.bind({})
SeekButtonFill.args = {
  ariaLabel: 'SeekButton Fill',
  size: 'medium',
  variant: 'fill',
  round: true,
}

export const SeekButtonOutline = Template.bind({})
SeekButtonOutline.args = {
  ariaLabel: 'SeekButton Outline',
  size: 'medium',
  variant: 'outline',
  round: true,
}
