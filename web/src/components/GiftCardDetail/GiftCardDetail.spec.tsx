import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Mock } from "vitest"
import { useGiftCardDetail } from "../../hooks/useGiftCards"
import GiftCardDetail from "./GiftCardDetail"

vi.mock("./GiftCardDetailHeader/GiftCardDetailHeader", () => ({
  default: () => <div data-testid="gift-card-detail-header" />,
}))
vi.mock("./GiftCardDetailStats/GiftCardDetailStats", () => ({
  default: () => <div data-testid="gift-card-detail-stats" />,
}))
vi.mock("./GiftCardDetailDescription/GiftCardDetailDescription", () => ({
  default: () => <div data-testid="gift-card-detail-description" />,
}))
vi.mock("./GiftCardDetailBeneficiaries/GiftCardDetailBeneficiaries", () => ({
  default: () => <div data-testid="gift-card-detail-beneficiaries" />,
}))
vi.mock("./ReturnButton/ReturnButton", () => ({
  default: () => <div data-testid="return-button" />,
}))

vi.mock("../../hooks/useGiftCards", () => ({
  useGiftCardDetail: vi.fn(),
}))

describe("GiftCardDetail", () => {
  it("should render loading state correctly", () => {
    ;(useGiftCardDetail as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    })

    render(
      <BrowserRouter>
        <GiftCardDetail />
      </BrowserRouter>
    )

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("should render error state correctly", () => {
    ;(useGiftCardDetail as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Error loading gift card details"),
    })

    render(
      <BrowserRouter>
        <GiftCardDetail />
      </BrowserRouter>
    )

    expect(screen.getByText("Error loading gift card details")).toBeInTheDocument()
  })

  it("should render gift card details correctly", () => {
    ;(useGiftCardDetail as Mock).mockReturnValue({
      data: {
        name: "Test Card",
        openingDate: "2023-01-01",
        closingDate: "2023-12-31",
        state: "active",
        consumedAmount: 50,
        allowedAmount: 100,
        description: "This is a test gift card.",
        beneficiaries: [
          {
            id: 1,
            firstName: "John",
            type: "user",
            consumption: {
              allowedAmount: 100,
              consumedAmount: 50,
            },
          },
        ],
      },
      isLoading: false,
      error: null,
    })

    render(
      <BrowserRouter>
        <GiftCardDetail />
      </BrowserRouter>
    )

    expect(screen.getByTestId("return-button")).toBeInTheDocument()
    expect(screen.getByTestId("gift-card-detail-header")).toBeInTheDocument()
    expect(screen.getByTestId("gift-card-detail-stats")).toBeInTheDocument()
    expect(screen.getByTestId("gift-card-detail-description")).toBeInTheDocument()
    expect(screen.getByTestId("gift-card-detail-beneficiaries")).toBeInTheDocument()
  })
})
