import { useQuery } from "@tanstack/react-query"
import { renderHook } from "@testing-library/react-hooks"
import { Mock } from "vitest"
import { GiftCard } from "../types"
import { useGiftCardDetail, useGiftCards } from "./useGiftCards"

vi.mock("axios")

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}))

const mockedUseQuery = useQuery as Mock

describe("useGiftCards", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const mockData: GiftCard[] = [
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

  it("should fetch and return gift cards", async () => {
    mockedUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    })

    const { result } = renderHook(() => useGiftCards())

    expect(result.current.activeCards).toEqual([mockData[0]])
    expect(result.current.archivedCards).toEqual([mockData[1]])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it("should handle errors", async () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    })

    const { result } = renderHook(() => useGiftCards())

    expect(result.current.activeCards).toEqual([])
    expect(result.current.archivedCards).toEqual([])
    expect(result.current.isLoading).toBe(true)
    expect(result.current.error).toBeNull()
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

    expect(result.current.cardDetail).toEqual(mockDetail)
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

    expect(result.current.cardDetail).toStrictEqual({
      id: "",
      name: "",
      openingDate: "",
      closingDate: "",
      state: undefined,
      allowedAmount: 0,
      consumedAmount: 0,
      description: "",
      beneficiaries: [],
    })
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeInstanceOf(Error)
  })
})
