import { describe, expect, it } from "vitest"
import { formatBeneficiaryNames } from "./beneficiary"

describe("formatBeneficiaryNames", () => {
  it("should format correctly when there is one beneficiary", () => {
    const beneficiaries: {
      firstName: string
      type: string
    }[] = [{ firstName: "John", type: "user" }]
    expect(formatBeneficiaryNames(beneficiaries)).toBe("Vous-même")
  })

  it("should format correctly when there are two beneficiaries", () => {
    const beneficiaries: {
      firstName: string
      type: string
    }[] = [
      { firstName: "John", type: "user" },
      { firstName: "Jane", type: "companion" },
    ]
    expect(formatBeneficiaryNames(beneficiaries)).toBe("Vous-même et Jane")
  })

  it("should format correctly when there are more than two beneficiaries", () => {
    const beneficiaries: {
      firstName: string
      type: string
    }[] = [
      { firstName: "John", type: "user" },
      { firstName: "Jane", type: "companion" },
      { firstName: "Doe", type: "child" },
    ]
    expect(formatBeneficiaryNames(beneficiaries)).toBe("Vous-même, Jane et Doe")
  })

  it("should format correctly when there are no users", () => {
    const beneficiaries: {
      firstName: string
      type: string
    }[] = [
      { firstName: "Alice", type: "companion" },
      { firstName: "Bob", type: "companion" },
      { firstName: "Charlie", type: "child" },
    ]
    expect(formatBeneficiaryNames(beneficiaries)).toBe("Alice, Bob et Charlie")
  })

  it("should format correctly when there are mixed types", () => {
    const beneficiaries: {
      firstName: string
      type: string
    }[] = [
      { firstName: "Alice", type: "companion" },
      { firstName: "Bob", type: "user" },
      { firstName: "Charlie", type: "child" },
    ]
    expect(formatBeneficiaryNames(beneficiaries)).toBe("Alice, Vous-même et Charlie")
  })
})
