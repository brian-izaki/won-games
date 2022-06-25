import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story = (args) => <Main {...args} />

export const Default: Story = Template.bind({})

export const Basic: Story = Template.bind({})

Basic.args = {
  title: 'Welcome',
  description: 'To the jungle'
}
