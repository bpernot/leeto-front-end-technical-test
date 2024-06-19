import { render } from "@testing-library/react"
import BeneficiaryIcon from "./BeneficiaryIcon"

describe("BeneficiaryIcon", () => {
  it('should render the correct icon for type "user"', () => {
    const { getByText } = render(<BeneficiaryIcon type="user" isLast={false} />)
    expect(getByText("🙋‍♂️")).toBeInTheDocument()
  })

  it('should render the correct icon for type "companion"', () => {
    const { getByText } = render(<BeneficiaryIcon type="companion" isLast={false} />)
    expect(getByText("💙")).toBeInTheDocument()
  })

  it('should render the correct icon for type "child"', () => {
    const { getByText } = render(<BeneficiaryIcon type="child" isLast={false} />)
    expect(getByText("👶")).toBeInTheDocument()
  })

  it("should render nothing for unknown type", () => {
    const { container } = render(<BeneficiaryIcon type="unknown" isLast={false} />)
    const span: HTMLSpanElement | null = container.querySelector("span")
    expect(span?.textContent).toBe("")
  })

  it("should apply the correct class when isLast is true", () => {
    const { container } = render(<BeneficiaryIcon type="user" isLast={true} />)
    const div: ChildNode | null = container.firstChild
    expect(div).toHaveClass("beneficiary-icon-last")
  })

  it("should apply the correct class when isLast is false", () => {
    const { container } = render(<BeneficiaryIcon type="user" isLast={false} />)
    const div: ChildNode | null = container.firstChild
    expect(div).toHaveClass("beneficary-icon-first")
  })

  it('should apply the "beneficary-icon-first-cut" class when isLast is false', () => {
    const { container } = render(<BeneficiaryIcon type="user" isLast={false} />)
    const innerDiv: Element | null = container.querySelector(".beneficary-icon-first-cut")
    expect(innerDiv).toBeInTheDocument()
  })

  it('should not apply the "beneficary-icon-first-cut" class when isLast is true', () => {
    const { container } = render(<BeneficiaryIcon type="user" isLast={true} />)
    const innerDiv: Element | null = container.querySelector(".beneficary-icon-first-cut")
    expect(innerDiv).not.toBeInTheDocument()
  })
})
