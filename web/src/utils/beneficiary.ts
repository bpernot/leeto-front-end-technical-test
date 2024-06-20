// format the beneficiary names for the gift card detail
export const formatBeneficiaryNames = (beneficiaries: { firstName: string; type: string }[]): string => {
  if (beneficiaries.length === 1) {
    return beneficiaries[0].type === "user" ? "Vous-même" : beneficiaries[0].firstName
  }

  if (beneficiaries.length === 2) {
    const firstBeneficiary: string = beneficiaries[0].type === "user" ? "Vous-même" : beneficiaries[0].firstName
    const secondBeneficiary: string = beneficiaries[1].type === "user" ? "Vous-même" : beneficiaries[1].firstName
    return `${firstBeneficiary} et ${secondBeneficiary}`
  }

  const allBeneficiariesButNotTheLast: string = beneficiaries
    .slice(0, -1)
    .map((beneficiary) => (beneficiary.type === "user" ? "Vous-même" : beneficiary.firstName))
    .join(", ")

  const lastBeneficiary: string =
    beneficiaries[beneficiaries.length - 1].type === "user" ? "Vous-même" : beneficiaries[beneficiaries.length - 1].firstName
  return `${allBeneficiariesButNotTheLast} et ${lastBeneficiary}`
}
