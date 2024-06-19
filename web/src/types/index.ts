export type GiftCard = {
  id: string
  description: string
  name: string
  openingDate: string
  closingDate: string
  state: "active" | "archived" | undefined
  allowedAmount: number
  consumedAmount: number
  beneficiaries: {
    id: number
    type: "user" | "companion" | "child"
    firstName: string
    consumption: {
      allowedAmount: number
      consumedAmount: number
    }
  }[]
}
