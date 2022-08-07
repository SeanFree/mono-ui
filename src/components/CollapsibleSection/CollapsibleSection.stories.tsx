import { ComponentStory } from '@storybook/react'
import { LoremIpsum } from 'lorem-ipsum'
import { Heading, Paragraph } from '..'
import CollapsibleSection from './CollapsibleSection'

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

export default {
  title: 'Media/CollapsibleSection',
  component: CollapsibleSection,
}

const Template: ComponentStory<typeof CollapsibleSection> = (args) => (
  <CollapsibleSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  headingText: 'Collapsible Section',
  children: (
    <>
      <Heading as="h3">Collapsible Section</Heading>
      <Paragraph>{lorem.generateParagraphs(18)}</Paragraph>
    </>
  ),
}
