import { Meta, StoryFn } from "@storybook/react"
import GiftCardDetailHeader from "./GiftCardDetailHeader"
import { GiftCardDetailHeaderProps } from "./types"

export default {
  title: "Components/GiftCardDetailHeader",
  component: GiftCardDetailHeader,
} as Meta

const Template: StoryFn<GiftCardDetailHeaderProps> = (args) => <GiftCardDetailHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "Carte cadeau Amazon",
  openingDate: "2023-01-01",
  closingDate: "2024-12-31",
  state: "active",
}
