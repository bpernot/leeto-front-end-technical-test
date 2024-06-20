import { Meta, StoryFn } from "@storybook/react"
import GiftCardDetailStats from "./GiftCardDetailStats"
import { GiftCardDetailStatsProps } from "./types"

export default {
  title: "Components/GiftCardDetailStats",
  component: GiftCardDetailStats,
} as Meta

const Template: StoryFn<GiftCardDetailStatsProps> = (args) => <GiftCardDetailStats {...args} />

export const Default = Template.bind({})
Default.args = {
  consumedAmount: 50,
  allowedAmount: 100,
}
