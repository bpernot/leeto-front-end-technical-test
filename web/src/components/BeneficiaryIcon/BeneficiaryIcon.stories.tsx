import { Meta, StoryFn } from "@storybook/react"
import BeneficiaryIcon from "./BeneficiaryIcon"
import { BeneficiaryIconProps } from "./types"

export default {
  title: "Components/BeneficiaryIcon",
  component: BeneficiaryIcon,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["user", "companion", "child"],
      },
    },
    isLast: {
      control: "boolean",
    },
  },
} as Meta

const Template: StoryFn<BeneficiaryIconProps> = (args) => <BeneficiaryIcon {...args} />

export const User = Template.bind({})
User.args = {
  type: "user",
  isLast: false,
}

export const Companion = Template.bind({})
Companion.args = {
  type: "companion",
  isLast: false,
}

export const Child = Template.bind({})
Child.args = {
  type: "child",
  isLast: false,
}

export const LastUser = Template.bind({})
LastUser.args = {
  type: "user",
  isLast: true,
}
