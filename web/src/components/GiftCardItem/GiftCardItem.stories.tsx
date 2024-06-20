import { Meta, StoryFn } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import { GiftCard } from "../../types"
import GiftCardItem from "./GiftCardItem"

type GiftCardItemProps = {
  card: GiftCard
}

export default {
  title: "Components/GiftCardItem",
  component: GiftCardItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="max-w-xs">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta

const Template: StoryFn<GiftCardItemProps> = (args) => <GiftCardItem {...args} />

export const ActiveCard = Template.bind({})
ActiveCard.args = {
  card: {
    id: "1",
    description: "Carte cadeau Amazon",
    name: "Carte cadeau Amazon",
    openingDate: "2023-01-01",
    closingDate: "2024-12-31",
    state: "active",
    consumedAmount: 50,
    allowedAmount: 100,
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
    ],
  },
}

export const ArchivedCard = Template.bind({})
ArchivedCard.args = {
  card: {
    id: "2",
    description: "Carte cadeau Netflix",
    name: "Carte cadeau Netflix",
    openingDate: "2023-02-15",
    closingDate: "2023-12-15",
    state: "archived",
    consumedAmount: 90,
    allowedAmount: 100,
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Jane",
        consumption: {
          consumedAmount: 90,
          allowedAmount: 100,
        },
      },
    ],
  },
}
