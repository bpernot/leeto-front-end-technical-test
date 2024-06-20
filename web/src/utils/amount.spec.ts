import { describe, expect, it } from "vitest"
import { availableAmount, calculatedProgress, displayAllowedAmount, displayConsumedAmount, isCheckingAmounts } from "./amount"

describe("GiftCardStats utility functions", () => {
  describe("isCheckingAmounts", () => {
    it("should return true when consumedAmount is 0 or undefined and allowedAmount is 0", () => {
      expect(isCheckingAmounts(0, 0)).toBe(true)
      expect(isCheckingAmounts(undefined as unknown as number, 0)).toBe(true)
    })

    it("should return false when consumedAmount or allowedAmount is not 0", () => {
      expect(isCheckingAmounts(1, 0)).toBe(false)
      expect(isCheckingAmounts(0, 1)).toBe(false)
    })
  })

  describe("calculatedProgress", () => {
    it("should return 0 when isCheckingAmounts is true or allowedAmount is undefined", () => {
      expect(calculatedProgress(0, 0)).toBe(0)
      expect(calculatedProgress(undefined as unknown as number, 0)).toBe(0)
      expect(calculatedProgress(50, undefined as unknown as number)).toBe(0)
    })

    it("should calculate the correct progress percentage", () => {
      expect(calculatedProgress(50, 100)).toBe(50)
      expect(calculatedProgress(25, 50)).toBe(50)
      expect(calculatedProgress(75, 100)).toBe(75)
    })
  })

  describe("availableAmount", () => {
    it("should return 0 when isCheckingAmounts is true or allowedAmount is undefined", () => {
      expect(availableAmount(0, 0)).toBe(0)
      expect(availableAmount(undefined as unknown as number, 0)).toBe(0)
      expect(availableAmount(50, undefined as unknown as number)).toBe(0)
    })

    it("should calculate the correct available amount", () => {
      expect(availableAmount(50, 100)).toBe(50)
      expect(availableAmount(25, 50)).toBe(25)
      expect(availableAmount(75, 100)).toBe(25)
    })
  })

  describe("displayConsumedAmount", () => {
    it("should return 0 when isCheckingAmounts is true, consumedAmount is undefined, or allowedAmount is undefined", () => {
      expect(displayConsumedAmount(0, 0)).toBe(0)
      expect(displayConsumedAmount(undefined as unknown as number, 0)).toBe(0)
      expect(displayConsumedAmount(50, undefined as unknown as number)).toBe(0)
    })

    it("should return the consumed amount when valid", () => {
      expect(displayConsumedAmount(50, 100)).toBe(50)
      expect(displayConsumedAmount(25, 50)).toBe(25)
      expect(displayConsumedAmount(75, 100)).toBe(75)
    })
  })

  describe("displayAllowedAmount", () => {
    it("should return 0 when isCheckingAmounts is true or allowedAmount is undefined", () => {
      expect(displayAllowedAmount(0, 0)).toBe(0)
      expect(displayAllowedAmount(50, undefined as unknown as number)).toBe(0)
    })

    it("should return the allowed amount when valid", () => {
      expect(displayAllowedAmount(50, 100)).toBe(100)
      expect(displayAllowedAmount(25, 50)).toBe(50)
      expect(displayAllowedAmount(75, 100)).toBe(100)
    })
  })
})
