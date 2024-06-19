import { fireEvent, render, screen } from "@testing-library/react"
import { GiftCard } from "../../../types"
import GiftCardTabs from "./GiftCardTabs"
import { GiftCardTabsProps } from "./types"

const mockActiveCards: GiftCard[] = [
  {
    id: 1,
    description: "Description 1",
    name: "Card 1",
    openingDate: "2022-01-01",
    closingDate: "2022-12-31",
    state: "active",
    allowedAmount: 100,
    consumedAmount: 50,
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "John",
        consumption: {
          allowedAmount: 100,
          consumedAmount: 50,
        },
      },
    ],
  },
]

const mockArchivedCards: GiftCard[] = [
  {
    id: 2,
    description: "Description 2",
    name: "Card 2",
    openingDate: "2021-01-01",
    closingDate: "2021-12-31",
    state: "archived",
    allowedAmount: 200,
    consumedAmount: 150,
    beneficiaries: [
      {
        id: 2,
        type: "companion",
        firstName: "Jane",
        consumption: {
          allowedAmount: 200,
          consumedAmount: 150,
        },
      },
    ],
  },
]

describe("GiftCardTabs", () => {
  it("should render active and archived tabs with correct counts", () => {
    const mockSetState = vi.fn()
    const props: GiftCardTabsProps = {
      state: "active",
      setState: mockSetState,
      activeCards: mockActiveCards,
      archivedCards: mockArchivedCards,
    }

    render(<GiftCardTabs {...props} />)

    expect(screen.getByText("Actives (1)")).toBeInTheDocument()
    expect(screen.getByText("Clôturées (1)")).toBeInTheDocument()
  })

  it('should call setState with "active" when the active tab is clicked', () => {
    const mockSetState = vi.fn()
    const props: GiftCardTabsProps = {
      state: "archived",
      setState: mockSetState,
      activeCards: mockActiveCards,
      archivedCards: mockArchivedCards,
    }

    render(<GiftCardTabs {...props} />)

    fireEvent.click(screen.getByText("Actives (1)"))

    expect(mockSetState).toHaveBeenCalledWith("active")
  })

  it('should call setState with "archived" when the archived tab is clicked', () => {
    const mockSetState = vi.fn()
    const props: GiftCardTabsProps = {
      state: "active",
      setState: mockSetState,
      activeCards: mockActiveCards,
      archivedCards: mockArchivedCards,
    }

    render(<GiftCardTabs {...props} />)

    fireEvent.click(screen.getByText("Clôturées (1)"))

    expect(mockSetState).toHaveBeenCalledWith("archived")
  })
})
