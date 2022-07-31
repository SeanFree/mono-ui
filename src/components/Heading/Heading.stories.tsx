import { ComponentStory } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'Typography/Heading',
  component: Heading,
}

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const H1 = Template.bind({})
H1.args = {
  as: 'h1',
  children: 'Heading Level 1',
  subText: 'Sub Text',
}

export const H2 = Template.bind({})
H2.args = {
  as: 'h2',
  children: 'Heading Level 2',
  subText: 'Sub Text',
}

export const H3 = Template.bind({})
H3.args = {
  as: 'h3',
  children: 'Heading Level 3',
  subText: 'Sub Text',
}

export const H4 = Template.bind({})
H4.args = {
  as: 'h4',
  children: 'Heading Level 4',
  subText: 'Sub Text',
}

export const H5 = Template.bind({})
H5.args = {
  as: 'h5',
  children: 'Heading Level 5',
  subText: 'Sub Text',
}

export const H6 = Template.bind({})
H6.args = {
  as: 'h6',
  children: 'Heading Level 6',
  subText: 'Sub Text',
}
