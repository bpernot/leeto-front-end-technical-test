import { fireEvent, render, screen } from "@testing-library/react"
import { MockInstance } from "vitest"
import ReturnButton from "./ReturnButton"

describe("ReturnButton", () => {
  it("renders the button with correct text and icon", () => {
    render(<ReturnButton />)

    expect(screen.getByText("Retour vers les cartes cadeaux")).toBeInTheDocument()
  })

  it("calls window.history.back() when clicked", () => {
    const historyBackMock: MockInstance<[], void> = vi.spyOn(window.history, "back").mockImplementation(() => {})

    render(<ReturnButton />)
    const button: HTMLDivElement | null = screen.getByText("Retour vers les cartes cadeaux").closest("div")

    fireEvent.click(button!)

    expect(historyBackMock).toHaveBeenCalledTimes(1)

    historyBackMock.mockRestore()
  })
})
