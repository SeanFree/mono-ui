import { ComponentStory } from '@storybook/react'
import PlayButton from './PlayButton'

export default {
  title: 'Media/PlayButton',
  component: PlayButton,
}

const Template: ComponentStory<typeof PlayButton> = (args) => (
  <PlayButton {...args} />
)

export const PlayButtonFill = Template.bind({})
PlayButtonFill.args = {
  ariaLabel: 'PlayButton Fill',
  size: 'medium',
  variant: 'fill',
  iconName: 'play_arrow',
  round: true,
}

export const PlayButtonOutline = Template.bind({})
PlayButtonOutline.args = {
  ariaLabel: 'PlayButton Outline',
  size: 'medium',
  variant: 'outline',
  iconName: 'play_arrow',
  round: true,
}
