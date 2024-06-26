import { render, screen } from "@testing-library/react"
import GiftCardDetailStats from "./GiftCardDetailStats"
import { GiftCardDetailStatsProps } from "./types"

describe("GiftCardStats", () => {
  it("should render the available and consumed amounts correctly", () => {
    const props: GiftCardDetailStatsProps = {
      consumedAmount: 50,
      allowedAmount: 100,
    }

    render(<GiftCardDetailStats {...props} />)

    expect(screen.getByText("50 €")).toBeInTheDocument()
    expect(screen.getByText("disponibles")).toBeInTheDocument()
    expect(screen.getByText("50 € dépensés / 100 €")).toBeInTheDocument()
  })

  it("should render the ProgressBar with correct progress", () => {
    const props: GiftCardDetailStatsProps = {
      consumedAmount: 50,
      allowedAmount: 100,
    }

    render(<GiftCardDetailStats {...props} />)

    expect(screen.getByText("50%")).toBeInTheDocument()
  })

  it("should handle zero allowedAmount correctly", () => {
    const props: GiftCardDetailStatsProps = {
      consumedAmount: 50,
      allowedAmount: 0,
    }

    render(<GiftCardDetailStats {...props} />)

    expect(screen.getByText("-50 €")).toBeInTheDocument()
    expect(screen.getByText("disponibles")).toBeInTheDocument()
    expect(screen.getByText("50 € dépensés / 0 €")).toBeInTheDocument()
    expect(screen.getByText("Infinity%")).toBeInTheDocument()
  })

  it("should return 0 for ProgressBar", () => {
    const props: GiftCardDetailStatsProps = {
      consumedAmount: 0,
      allowedAmount: 50,
    }

    render(<GiftCardDetailStats {...props} />)

    expect(screen.getByText("50 €")).toBeInTheDocument()
    expect(screen.getByText("disponibles")).toBeInTheDocument()
    expect(screen.getByText("0 € dépensés / 50 €")).toBeInTheDocument()
    expect(screen.getByText("0%")).toBeInTheDocument()
  })

  it("should return 0 for ProgressBar and amount", () => {
    const props: GiftCardDetailStatsProps = {
      consumedAmount: 0,
      allowedAmount: 0,
    }

    render(<GiftCardDetailStats {...props} />)

    expect(screen.getByText("0 €")).toBeInTheDocument()
    expect(screen.getByText("disponibles")).toBeInTheDocument()
    expect(screen.getByText("0 € dépensés / 0 €")).toBeInTheDocument()
    expect(screen.getByText("0%")).toBeInTheDocument()
  })
})
