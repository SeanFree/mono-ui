import { ComponentStory } from '@storybook/react'
import PlaythroughButton from './PlaythroughButton'

export default {
  title: 'Media/PlaythroughButton',
  component: PlaythroughButton,
}

const Template: ComponentStory<typeof PlaythroughButton> = (args) => (
  <PlaythroughButton {...args} />
)

export const PlaythroughButtonFill = Template.bind({})
PlaythroughButtonFill.args = {
  ariaLabel: 'PlaythroughButton Fill',
  size: 'medium',
  variant: 'fill',
  iconName: 'Playthrough_arrow',
  round: true,
}

export const PlaythroughButtonOutline = Template.bind({})
PlaythroughButtonOutline.args = {
  ariaLabel: 'PlaythroughButton Outline',
  size: 'medium',
  variant: 'outline',
  iconName: 'Playthrough_arrow',
  round: true,
}
