import { Meta, StoryFn } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import ReturnButton from "./ReturnButton"

export default {
  title: "Components/ReturnButton",
  component: ReturnButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

const Template: StoryFn = (args) => <ReturnButton {...args} />

export const Default = Template.bind({})
Default.args = {}
