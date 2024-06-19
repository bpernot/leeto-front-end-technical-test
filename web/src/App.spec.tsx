import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import GiftCardDetailPage from "./pages/GiftCardDetailPage/GiftCardDetailPage"
import HomePage from "./pages/HomePage/HomePage"

vi.mock("./pages/HomePage/HomePage", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}))

vi.mock("./pages/GiftCardDetailPage/GiftCardDetailPage", () => ({
  default: () => <div data-testid="gift-card-detail-page">Gift Card Detail Page</div>,
}))

describe("App", () => {
  it("should render the home page correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByTestId("home-page")).toBeInTheDocument()
  })

  it("should render the gift card detail page correctly", () => {
    render(
      <MemoryRouter initialEntries={["/gift-card/1"]}>
        <GiftCardDetailPage />
      </MemoryRouter>
    )

    expect(screen.getByTestId("gift-card-detail-page")).toBeInTheDocument()
  })
})
