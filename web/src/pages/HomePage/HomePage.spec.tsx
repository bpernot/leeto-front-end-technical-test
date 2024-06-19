import { render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

vi.mock("../../components/GiftCardList/GiftCardList", () => ({
  default: () => <div>Mocked GiftCardList</div>,
}))

describe("HomePage", () => {
  it("renders the GiftCardList component", () => {
    render(<HomePage />)

    expect(screen.getByText("Mocked GiftCardList")).toBeInTheDocument()
  })
})
