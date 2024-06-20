import { Meta, StoryFn } from "@storybook/react"
import ProgressBar from "./ProgressBar"

type ProgressBarProps = {
  progress: number
}

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
  },
} as Meta

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  progress: 20,
}

export const LowProgress = Template.bind({})
LowProgress.args = {
  progress: 10,
}

export const HighProgress = Template.bind({})
HighProgress.args = {
  progress: 90,
}
