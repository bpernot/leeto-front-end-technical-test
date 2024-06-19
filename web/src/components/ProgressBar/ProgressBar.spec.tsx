import { render, screen } from "@testing-library/react"
import ProgressBar from "./ProgressBar"

describe("ProgressBar", () => {
  it("renders correctly with a progress of 50%", () => {
    render(<ProgressBar progress={50} />)

    const progressBar: Element | null = screen.getByText("50%").previousElementSibling
    const progressText: HTMLElement = screen.getByText("50%")

    expect(progressBar).toBeInTheDocument()
    expect(progressText).toBeInTheDocument()
  })

  it("renders correctly with a progress of 0%", () => {
    render(<ProgressBar progress={0} />)

    const progressBar: Element | null = screen.getByText("0%").previousElementSibling
    const progressText: HTMLElement = screen.getByText("0%")

    expect(progressBar).toBeInTheDocument()
    expect(progressText).toBeInTheDocument()
  })

  it("renders correctly with a progress of 100%", () => {
    render(<ProgressBar progress={100} />)

    const progressBar: Element | null = screen.getByText("100%").previousElementSibling
    const progressText: HTMLElement = screen.getByText("100%")

    expect(progressBar).toBeInTheDocument()
    expect(progressText).toBeInTheDocument()
  })

  it("handles decimal progress values correctly", () => {
    render(<ProgressBar progress={33.33} />)

    const progressBar: Element | null = screen.getByText("33%").previousElementSibling
    const progressText: HTMLElement = screen.getByText("33%")

    expect(progressBar).toBeInTheDocument()
    expect(progressText).toBeInTheDocument()
  })
})
