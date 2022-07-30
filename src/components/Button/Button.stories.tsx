import { ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonFill = Template.bind({})
ButtonFill.args = {
  ariaLabel: 'Button Fill',
  children: 'Button Fill',
  size: 'medium',
  variant: 'fill',
}

export const ButtonOutline = Template.bind({})
ButtonOutline.args = {
  ariaLabel: 'Button Outline',
  children: 'Button Outline',
  size: 'medium',
  variant: 'outline',
}

export const ButtonLink = Template.bind({})
ButtonLink.args = {
  ariaLabel: 'Button Link',
  children: 'Button Link',
  size: 'medium',
  variant: 'link',
}
