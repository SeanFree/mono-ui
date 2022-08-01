import { ComponentStory } from '@storybook/react'
import SkipButton from './SkipButton'

export default {
  title: 'Media/SkipButton',
  component: SkipButton,
}

const Template: ComponentStory<typeof SkipButton> = (args) => (
  <SkipButton {...args} />
)

export const SkipButtonFill = Template.bind({})
SkipButtonFill.args = {
  ariaLabel: 'SkipButton Fill',
  size: 'medium',
  variant: 'fill',
  round: true,
}

export const SkipButtonOutline = Template.bind({})
SkipButtonOutline.args = {
  ariaLabel: 'SkipButton Outline',
  size: 'medium',
  variant: 'outline',
  round: true,
}
