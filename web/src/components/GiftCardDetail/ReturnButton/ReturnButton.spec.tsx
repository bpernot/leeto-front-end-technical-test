import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter, useNavigate } from "react-router-dom"
import { Mock } from "vitest"
import ReturnButton from "./ReturnButton"

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe("ReturnButton", () => {
  it("renders the button with correct text and icon", () => {
    render(
      <BrowserRouter>
        <ReturnButton />
      </BrowserRouter>
    )

    expect(screen.getByText("Retour vers les cartes cadeaux")).toBeInTheDocument()
    expect(screen.getByTestId("icon-svg")).toBeInTheDocument()
  })

  it("calls navigate(-1) when icon is clicked in mobile view", () => {
    const navigate: Mock<any, any> = vi.fn()

    vi.mocked(useNavigate).mockReturnValue(navigate)

    render(
      <BrowserRouter>
        <ReturnButton />
      </BrowserRouter>
    )
    const iconButton: HTMLElement | null = screen.getByTestId("icon-svg").parentElement

    fireEvent.click(iconButton!)

    expect(navigate).toHaveBeenCalledWith(-1)
  })

  it("calls navigate(-1) when text is clicked in desktop view", () => {
    const navigate: Mock<any, any> = vi.fn()

    vi.mocked(useNavigate).mockReturnValue(navigate)

    render(
      <BrowserRouter>
        <ReturnButton />
      </BrowserRouter>
    )
    const textButton: HTMLElement = screen.getByText("Retour vers les cartes cadeaux")

    fireEvent.click(textButton)

    expect(navigate).toHaveBeenCalledWith(-1)
  })
})
