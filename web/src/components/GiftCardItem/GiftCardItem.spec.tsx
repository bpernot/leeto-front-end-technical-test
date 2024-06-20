import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { GiftCard } from "../../types"
import GiftCardItem from "./GiftCardItem"

vi.mock("../../utils/date", () => ({
  formatTimeDifference: (_: string, isArchived: boolean) => `formatted date ${isArchived}`,
}))

const mockGiftCard: GiftCard = {
  id: "1",
  description: "Description 1",
  name: "Card 1",
  openingDate: "2022-01-01",
  closingDate: "2022-12-31",
  state: "active",
  allowedAmount: 100,
  consumedAmount: 50,
  beneficiaries: [],
}

const Wrapper = ({ children }: { children: React.ReactNode }) => <MemoryRouter>{children}</MemoryRouter>

describe("GiftCardItem", () => {
  it("should render the gift card information correctly", () => {
    render(<GiftCardItem card={mockGiftCard} />, { wrapper: Wrapper })

    expect(screen.getByText("Card 1")).toBeInTheDocument()
    expect(screen.getByText("50 € dépensés / 100 €")).toBeInTheDocument()
    expect(screen.getByText("formatted date false")).toBeInTheDocument()
    expect(screen.getByAltText("gift card logo")).toBeInTheDocument()
  })

  it("should render the progress bar with correct progress", () => {
    render(<GiftCardItem card={mockGiftCard} />, { wrapper: Wrapper })

    const progressBar: HTMLElement = screen.getByText("50%")
    expect(progressBar).toBeInTheDocument()
  })
})
