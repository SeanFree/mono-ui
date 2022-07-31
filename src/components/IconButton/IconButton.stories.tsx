import { ComponentStory } from '@storybook/react'
import IconButton from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
}

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const IconButtonFill = Template.bind({})
IconButtonFill.args = {
  ariaLabel: 'IconButton Fill',
  children: 'IconButton Fill',
  size: 'medium',
  variant: 'fill',
  iconName: 'play_arrow',
}

export const IconButtonOutline = Template.bind({})
IconButtonOutline.args = {
  ariaLabel: 'IconButton Outline',
  children: 'IconButton Outline',
  size: 'medium',
  variant: 'outline',
  iconName: 'play_arrow',
}

export const IconButtonLink = Template.bind({})
IconButtonLink.args = {
  ariaLabel: 'IconButton Link',
  children: 'IconButton Link',
  size: 'medium',
  variant: 'link',
  iconName: 'play_arrow',
}
