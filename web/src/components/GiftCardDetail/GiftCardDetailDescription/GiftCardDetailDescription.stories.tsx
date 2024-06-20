import { Meta, StoryFn } from "@storybook/react"
import GiftCardDetailDescription from "./GiftCardDetailDescription"

type GiftCardDescriptionProps = {
  description: string | undefined
}

export default {
  title: "Components/GiftCardDescription",
  component: GiftCardDetailDescription,
} as Meta

const Template: StoryFn<GiftCardDescriptionProps> = (args) => <GiftCardDetailDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  description: "Ceci est une carte-cadeau pour divers magasins et services. Utilisez-la pour acheter ce que vous aimez!",
}
