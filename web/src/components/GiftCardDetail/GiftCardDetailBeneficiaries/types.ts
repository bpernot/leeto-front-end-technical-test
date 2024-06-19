export type BeneficiariesProps = {
  beneficiaries: Array<{
    id: number
    firstName: string
    type: string
    consumption: {
      consumedAmount: number
      allowedAmount: number
    }
  }>
}
