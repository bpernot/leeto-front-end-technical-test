import { useQuery } from "@tanstack/react-query"
import { renderHook } from "@testing-library/react-hooks"
import { Mock } from "vitest"
import { GiftCard } from "../types"
import { useActiveGiftCards, useArchivedGiftCards, useGiftCardDetail } from "./useGiftCards"

vi.mock("axios")

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}))

const mockedUseQuery = useQuery as Mock

describe("useActiveGiftCards", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const mockActiveCards: GiftCard[] = [
    {
      id: "1",
      description: "Test card 1",
      name: "Card 1",
      openingDate: "2023-01-01",
      closingDate: "2023-12-31",
      state: "active",
      allowedAmount: 100,
      consumedAmount: 50,
      beneficiaries: [],
    },
  ]

  it("should fetch and return active gift cards", async () => {
    mockedUseQuery.mockReturnValue({
      data: mockActiveCards,
      isLoading: false,
      error: null,
    })

    const { result } = renderHook(() => useActiveGiftCards())

    expect(result.current.data).toEqual(mockActiveCards)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
  })
})

describe("useArchivedGiftCards", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const mockArchivedCards: GiftCard[] = [
    {
      id: "2",
      description: "Test card 2",
      name: "Card 2",
      openingDate: "2023-01-01",
      closingDate: "2023-12-31",
      state: "archived",
      allowedAmount: 200,
      consumedAmount: 150,
      beneficiaries: [],
    },
  ]

  it("should fetch and return archived gift cards", async () => {
    mockedUseQuery.mockReturnValue({
      data: mockArchivedCards,
      isLoading: false,
      error: null,
    })

    const { result } = renderHook(() => useArchivedGiftCards())

    expect(result.current.data).toEqual(mockArchivedCards)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
  })
})

describe("useGiftCardDetail", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const mockDetail: GiftCard = {
    id: "1",
    description: "Test card 1",
    name: "Card 1",
    openingDate: "2023-01-01",
    closingDate: "2023-12-31",
    state: "active",
    allowedAmount: 100,
    consumedAmount: 50,
    beneficiaries: [],
  }

  it("should fetch and return a gift card detail", async () => {
    mockedUseQuery.mockReturnValue({
      data: mockDetail,
      isLoading: false,
      error: null,
    })

    const { result } = renderHook(() => useGiftCardDetail("1"))

    expect(result.current.data).toEqual(mockDetail)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it("should handle empty data", async () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Test error"),
    })

    const { result } = renderHook(() => useGiftCardDetail("1"))

    expect(result.current.data).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeInstanceOf(Error)
  })
})
