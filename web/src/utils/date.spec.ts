import { formatDate, formatTimeDifference } from "./date"

describe("formatTimeDifference", () => {
  it("returns correct difference for closed state with years", () => {
    const targetDate: Date = new Date()
    targetDate.setFullYear(targetDate.getFullYear() - 2)
    const result: string = formatTimeDifference(targetDate.toISOString(), true)
    expect(result).toBe("Clôturée il y a 2 ans")
  })

  it("returns correct difference for open state with years", () => {
    const targetDate: Date = new Date()
    targetDate.setFullYear(targetDate.getFullYear() + 2)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 2 ans")
  })

  it("returns correct difference for exactly 1 year", () => {
    const targetDate: Date = new Date()
    targetDate.setFullYear(targetDate.getFullYear() + 1)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 1 an")
  })

  it("returns correct difference for closed state with months", () => {
    const targetDate: Date = new Date()
    targetDate.setMonth(targetDate.getMonth() - 5)
    const result: string = formatTimeDifference(targetDate.toISOString(), true)
    expect(result).toBe("Clôturée il y a 5 mois")
  })

  it("returns correct difference for open state with months", () => {
    const targetDate: Date = new Date()
    targetDate.setMonth(targetDate.getMonth() + 5)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 5 mois")
  })

  it("returns correct difference for exactly 1 month", () => {
    const targetDate: Date = new Date()
    targetDate.setMonth(targetDate.getMonth() + 1)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 1 mois")
  })

  it("returns correct difference for closed state with weeks", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() - 14)
    const result: string = formatTimeDifference(targetDate.toISOString(), true)
    expect(result).toBe("Clôturée il y a 2 semaines")
  })

  it("returns correct difference for open state with weeks", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + 14)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 2 semaines")
  })

  it("returns correct difference for exactly 1 week", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + 7)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 1 semaine")
  })

  it("returns correct difference for closed state with days", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() - 10)
    const result: string = formatTimeDifference(targetDate.toISOString(), true)
    expect(result).toBe("Clôturée il y a 10 jours")
  })

  it("returns correct difference for open state with days", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + 10)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 10 jours")
  })

  it("returns correct difference for exactly 1 day", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + 1)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 1 jour")
  })

  it("returns correct difference for closed state with a single day", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() - 1)
    const result: string = formatTimeDifference(targetDate.toISOString(), true)
    expect(result).toBe("Clôturée il y a 1 jour")
  })

  it("returns correct difference for open state with a single day", () => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + 1)
    const result: string = formatTimeDifference(targetDate.toISOString(), false)
    expect(result).toBe("Se clôture dans 1 jour")
  })
})

describe("formatDate", () => {
  it("returns correctly formatted date", () => {
    const dateString: string = "2023-01-01T00:00:00Z"
    const result: string = formatDate(dateString)
    expect(result).toBe("1 janv. 2023")
  })

  it("returns correctly formatted date for another date", () => {
    const dateString: string = "2024-06-15T00:00:00Z"
    const result: string = formatDate(dateString)
    expect(result).toBe("15 juin 2024")
  })
})
