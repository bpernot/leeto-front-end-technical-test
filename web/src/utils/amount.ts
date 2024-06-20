// checking if the consumed amount and allowed amount are 0 or undefined
export const isCheckingAmounts = (consumedAmount: number, allowedAmount: number): boolean => {
  return (consumedAmount === 0 || consumedAmount === undefined) && allowedAmount === 0
}

// calculate the progress of the consumed amount
export const calculatedProgress = (consumedAmount: number, allowedAmount: number): number => {
  return isCheckingAmounts(consumedAmount, allowedAmount) || allowedAmount === undefined
    ? 0
    : ((consumedAmount ?? 0) / (allowedAmount ?? 0)) * 100
}

// calculate the available amount
export const availableAmount = (consumedAmount: number, allowedAmount: number): number => {
  return isCheckingAmounts(consumedAmount, allowedAmount) || allowedAmount === undefined ? 0 : (allowedAmount ?? 0) - (consumedAmount ?? 0)
}

// display the consumed amount
export const displayConsumedAmount = (consumedAmount: number, allowedAmount: number): number => {
  return isCheckingAmounts(consumedAmount, allowedAmount) || consumedAmount === undefined || allowedAmount === undefined
    ? 0
    : consumedAmount
}

// display the allowed amount
export const displayAllowedAmount = (consumedAmount: number, allowedAmount: number): number => {
  return isCheckingAmounts(consumedAmount, allowedAmount) || allowedAmount === undefined ? 0 : allowedAmount
}
