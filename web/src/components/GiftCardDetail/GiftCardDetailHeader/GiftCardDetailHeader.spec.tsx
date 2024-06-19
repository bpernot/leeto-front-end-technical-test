import { render, screen } from "@testing-library/react"
import { Mock } from "vitest"
import * as dateUtils from "../../../utils/date"
import GiftCardDetailHeader from "./GiftCardDetailHeader"
import { GiftCardDetailHeaderProps } from "./types"

vi.mock("../../../utils/date", () => ({
  formatDate: vi.fn(),
  formatTimeDifference: vi.fn(),
}))

describe("GiftCardDetailHeader", () => {
  const defaultProps: GiftCardDetailHeaderProps = {
    name: "Test Card",
    openingDate: "2023-01-01",
    closingDate: "2023-12-31",
    state: "active",
  }

  beforeEach(() => {
    ;(dateUtils.formatDate as Mock).mockImplementation((date: string) => date)
    ;(dateUtils.formatTimeDifference as Mock).mockImplementation((_: string, isClosed: boolean) =>
      isClosed ? "Clôturée il y a 1 an" : "Se clôture dans 1 an"
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should render the name correctly", () => {
    render(<GiftCardDetailHeader {...defaultProps} />)

    expect(screen.getByText("Test Card")).toBeInTheDocument()
  })

  it("should render formatted opening and closing dates correctly", () => {
    render(<GiftCardDetailHeader {...defaultProps} />)

    expect(dateUtils.formatDate).toHaveBeenCalledWith("2023-01-01")
    expect(dateUtils.formatDate).toHaveBeenCalledWith("2023-12-31")
    expect(screen.getByText("2023-01-01 - 2023-12-31")).toBeInTheDocument()
  })

  it("should render the time difference correctly", () => {
    render(<GiftCardDetailHeader {...defaultProps} />)

    expect(dateUtils.formatTimeDifference).toHaveBeenCalledWith("2023-12-31", false)
    expect(screen.getByText("Se clôture dans 1 an")).toBeInTheDocument()
  })

  it("should handle undefined dates correctly", () => {
    const props: GiftCardDetailHeaderProps = {
      name: "Test Card",
      openingDate: undefined,
      closingDate: undefined,
      state: "archived",
    }

    render(<GiftCardDetailHeader {...props} />)

    expect(dateUtils.formatDate).toHaveBeenCalledWith("")
    expect(dateUtils.formatDate).toHaveBeenCalledWith("")
    expect(
      screen.queryByText((_, element) => {
        return element?.textContent === " - "
      })
    ).toBeInTheDocument()
    expect(dateUtils.formatTimeDifference).toHaveBeenCalledWith("", true)
    expect(screen.getByText("Clôturée il y a 1 an")).toBeInTheDocument()
  })
})
