import { ComponentStory } from '@storybook/react'
import { LoremIpsum } from 'lorem-ipsum'
import Paragraph from './Paragraph'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: lorem.generateParagraphs(8),
}

export const WithDropcap = Template.bind({})
WithDropcap.args = {
  children: lorem.generateParagraphs(2),
  dropcap: true,
}
