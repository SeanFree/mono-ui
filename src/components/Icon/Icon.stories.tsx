import { ComponentStory } from '@storybook/react'
import Icon from './Icon'

export default {
  title: 'Decoration/Icon',
  component: Icon,
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'play_arrow',
  size: 'medium',
}
