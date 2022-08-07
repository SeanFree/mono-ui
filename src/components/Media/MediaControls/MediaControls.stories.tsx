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
  artist: 'Bad Snacks',
  // artworkSrc: 'https://f4.bcbits.com/img/0022378751_10.jpg',
  artworkSrc:
    'https://i1.sndcdn.com/artworks-KlpL0zV5WHEo5uJh-1MtyRQ-t500x500.jpg',
  buttonVariant: 'fill',
  roundButtons: true,
  title: 'New Moon',
}
