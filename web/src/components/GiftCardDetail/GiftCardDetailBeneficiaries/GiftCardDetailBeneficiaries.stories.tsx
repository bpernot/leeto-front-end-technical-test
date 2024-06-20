import { Meta, StoryFn } from "@storybook/react"
import GiftCardDetailBeneficiaries from "./GiftCardDetailBeneficiaries"
import { BeneficiariesProps } from "./types"

export default {
  title: "Components/Beneficiaries",
  component: GiftCardDetailBeneficiaries,
} as Meta

const Template: StoryFn<BeneficiariesProps> = (args) => <GiftCardDetailBeneficiaries {...args} />

export const Default = Template.bind({})
Default.args = {
  beneficiaries: [
    {
      id: 1,
      type: "user",
      firstName: "John",
      consumption: {
        consumedAmount: 50,
        allowedAmount: 100,
      },
    },
    {
      id: 2,
      type: "child",
      firstName: "Jane",
      consumption: {
        consumedAmount: 20,
        allowedAmount: 50,
      },
    },
  ],
}
