import { render, screen } from "@testing-library/react"
import GiftCardDetailPage from "./GiftCardDetailPage"

vi.mock("../../components/GiftCardDetail/GiftCardDetail", () => ({
  default: () => <div>Mocked GiftCardDetail</div>,
}))

describe("GiftCardDetailPage", () => {
  it("renders the GiftCardDetail component", () => {
    render(<GiftCardDetailPage />)

    expect(screen.getByText("Mocked GiftCardDetail")).toBeInTheDocument()
  })
})
