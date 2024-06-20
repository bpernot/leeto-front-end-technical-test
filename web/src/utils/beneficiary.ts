// format the beneficiary names for the gift card detail
export const formatBeneficiaryNames = (beneficiaries: { firstName: string; type: string }[]) => {
  if (beneficiaries.length === 1) {
    return beneficiaries[0].type === "user" ? "Vous-même" : beneficiaries[0].firstName
  }

  if (beneficiaries.length === 2) {
    const first = beneficiaries[0].type === "user" ? "Vous-même" : beneficiaries[0].firstName
    const second = beneficiaries[1].type === "user" ? "Vous-même" : beneficiaries[1].firstName
    return `${first} et ${second}`
  }

  const allButLast: string = beneficiaries
    .slice(0, -1)
    .map((b) => (b.type === "user" ? "Vous-même" : b.firstName))
    .join(", ")

  const last: string =
    beneficiaries[beneficiaries.length - 1].type === "user" ? "Vous-même" : beneficiaries[beneficiaries.length - 1].firstName
  return `${allButLast} et ${last}`
}
