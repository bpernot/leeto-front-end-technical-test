import { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { MemoryRouter } from "react-router-dom"
import GiftCardTabs from "./GiftCardTabs"
import { GiftCardTabsProps } from "./types"

export default {
  title: "Components/GiftCardTabs",
  component: GiftCardTabs,
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

const Template: StoryFn<GiftCardTabsProps> = (args) => {
  const [state, setState] = useState<"active" | "archived">("active")
  return <GiftCardTabs {...args} state={state} setState={setState} />
}

export const ActiveState = Template.bind({})
ActiveState.args = {
  activeCards: [
    {
      id: "1",
      name: "Carte cadeau Amazon",
      description: "Carte cadeau Amazon",
      openingDate: "2023-01-01",
      closingDate: "2023-12-31",
      state: "active",
      consumedAmount: 50,
      allowedAmount: 100,
      beneficiaries: [],
    },
  ],
  archivedCards: [
    {
      id: "2",
      name: "Carte cadeau Netflix",
      description: "Carte cadeau Netflix",
      openingDate: "2023-02-15",
      closingDate: "2023-12-15",
      state: "archived",
      consumedAmount: 90,
      allowedAmount: 100,
      beneficiaries: [],
    },
  ],
}

export const ArchivedState = Template.bind({})
ArchivedState.args = {
  activeCards: [
    {
      id: "3",
      name: "Carte cadeau Spotify",
      description: "Carte cadeau Spotify",
      openingDate: "2023-03-01",
      closingDate: "2023-12-01",
      state: "active",
      consumedAmount: 30,
      allowedAmount: 50,
      beneficiaries: [],
    },
  ],
  archivedCards: [
    {
      id: "4",
      name: "Carte cadeau Disney+",
      description: "Carte cadeau Disney+",
      openingDate: "2023-04-01",
      closingDate: "2023-11-01",
      state: "archived",
      consumedAmount: 20,
      allowedAmount: 30,
      beneficiaries: [],
    },
  ],
}
