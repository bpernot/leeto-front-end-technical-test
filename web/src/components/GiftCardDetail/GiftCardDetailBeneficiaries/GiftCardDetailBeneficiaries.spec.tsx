import { render, screen } from "@testing-library/react"
import GiftCardDetailBeneficiaries from "./GiftCardDetailBeneficiaries"
import { BeneficiariesProps } from "./types"

vi.mock("../../BeneficiaryIcon/BeneficiaryIcon", () => ({
  default: () => <span data-testid="beneficiary-icon" />,
}))

vi.mock("../../ProgressBar/ProgressBar", () => ({
  default: ({ progress }: { progress: number }) => <div data-testid="progress-bar">{progress}%</div>,
}))

describe("GiftCardDetailBeneficiaries", () => {
  const defaultProps: BeneficiariesProps = {
    beneficiaries: [
      {
        id: 1,
        firstName: "John",
        type: "user",
        consumption: {
          consumedAmount: 50,
          allowedAmount: 100,
        },
      },
      {
        id: 2,
        firstName: "Jane",
        type: "companion",
        consumption: {
          consumedAmount: 30,
          allowedAmount: 100,
        },
      },
      {
        id: 3,
        firstName: "Doe",
        type: "child",
        consumption: {
          consumedAmount: 20,
          allowedAmount: 50,
        },
      },
    ],
  }

  it("should render the beneficiaries correctly", () => {
    render(<GiftCardDetailBeneficiaries {...defaultProps} />)

    expect(screen.getByText("Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?")).toBeInTheDocument()
    expect(screen.getByText("John, Jane, Doe sont éligibles.")).toBeInTheDocument()
  })

  it("should render the consumption tracking correctly", () => {
    render(<GiftCardDetailBeneficiaries {...defaultProps} />)

    expect(screen.getByText("John")).toBeInTheDocument()
    expect(screen.getByText("50 € / 100 €")).toBeInTheDocument()
    expect(screen.getByText("50%")).toBeInTheDocument()

    expect(screen.getByText("Jane")).toBeInTheDocument()
    expect(screen.getByText("30 € / 100 €")).toBeInTheDocument()
    expect(screen.getByText("30%")).toBeInTheDocument()

    expect(screen.getByText("Doe")).toBeInTheDocument()
    expect(screen.getByText("20 € / 50 €")).toBeInTheDocument()
    expect(screen.getByText("40%")).toBeInTheDocument()
  })
})
