import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { useGiftCards } from "../../hooks/useGiftCards"
import { GiftCard } from "../../types"
import GiftCardList from "./GiftCardList"

vi.mock("../../hooks/useGiftCards")

const mockUseGiftCards: jest.MockedFunction<
  () => {
    activeCards: GiftCard[]
    archivedCards: GiftCard[]
    isLoading: boolean
    error: Error | null
  }
> = useGiftCards as jest.MockedFunction<typeof useGiftCards>

const mockActiveCards: GiftCard[] = [
  {
    id: "1",
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
    id: "2",
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

describe("GiftCardList", () => {
  beforeEach(() => {
    mockUseGiftCards.mockReturnValue({
      activeCards: mockActiveCards,
      archivedCards: mockArchivedCards,
      isLoading: false,
      error: null,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should render loading state correctly", () => {
    mockUseGiftCards.mockReturnValue({
      activeCards: [],
      archivedCards: [],
      isLoading: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <GiftCardList />
      </MemoryRouter>
    )

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("should render error state correctly", () => {
    mockUseGiftCards.mockReturnValue({
      activeCards: [],
      archivedCards: [],
      isLoading: false,
      error: new Error("Error loading gift cards"),
    })

    render(
      <MemoryRouter>
        <GiftCardList />
      </MemoryRouter>
    )

    expect(screen.getByText("Error loading gift cards")).toBeInTheDocument()
  })

  it("should render active gift cards correctly", () => {
    render(
      <MemoryRouter>
        <GiftCardList />
      </MemoryRouter>
    )

    expect(screen.getByText("Cartes cadeaux")).toBeInTheDocument()
    expect(screen.getByText("Actives (1)")).toBeInTheDocument()
    expect(screen.getByText("Card 1")).toBeInTheDocument()
  })

  it("should render archived gift cards correctly when archived tab is clicked", () => {
    render(
      <MemoryRouter>
        <GiftCardList />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText("Clôturées (1)"))

    expect(screen.getByText("Card 2")).toBeInTheDocument()
  })
})
