import { render, screen } from "@testing-library/react"
import GiftCardDetailDescription from "./GiftCardDetailDescription"

describe("GiftCardDescription", () => {
  it("renders the description correctly", () => {
    const description: string = "Ceci est une description de la carte-cadeau."
    render(<GiftCardDetailDescription description={description} />)

    expect(screen.getByText("Description de la carte-cadeau")).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it("handles undefined description correctly", () => {
    render(<GiftCardDetailDescription description={undefined} />)

    expect(screen.getByText("Description de la carte-cadeau")).toBeInTheDocument()
    const descriptionElement: HTMLElement = screen.getByText((content, element) => element?.tagName.toLowerCase() === "p" && content === "")
    expect(descriptionElement).toBeInTheDocument()
  })
})
