import { ComponentStory } from '@storybook/react'
import MediaControls from './MediaControls'

export default {
  title: 'Media/MediaControls',
  component: MediaControls,
}

const Template: ComponentStory<typeof MediaControls> = (args) => (
  <MediaControls {...args} />
)

export const Default = Template.bind({})
Default.args = {
  buttonVariant: 'fill',
  roundButtons: true,
}
