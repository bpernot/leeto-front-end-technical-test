import React from "react"
import { BeneficiaryIconProps } from "./types"

const BeneficiaryIcon: React.FC<BeneficiaryIconProps> = ({ type, isLast }) => {
  const getIcon = () => {
    switch (type) {
      case "user":
        return "🙋‍♂️"
      case "companion":
        return "💙"
      case "child":
        return "👶"
      default:
        return ""
    }
  }

  return (
    <div className={isLast ? "beneficiary-icon-last" : "beneficary-icon-first"}>
      <div className={!isLast ? "beneficary-icon-first-cut" : ""}></div>
      <span className="text-lg relative z-10 w-4 h-4 top-2 right-1">{getIcon()}</span>
    </div>
  )
}

export default BeneficiaryIcon
