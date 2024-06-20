import React from "react"
import { availableAmount, calculatedProgress, displayAllowedAmount, displayConsumedAmount } from "../../../utils/amount"
import ProgressBar from "../../ProgressBar/ProgressBar"
import { GiftCardDetailStatsProps } from "./types"

const GiftCardDetailStats: React.FC<GiftCardDetailStatsProps> = ({ consumedAmount, allowedAmount }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-baseline mb-4">
        <span className="text-4xl font-bold">{availableAmount(consumedAmount, allowedAmount)} €</span>
        <span className="text-gray-600 text-lg">disponibles</span>
      </div>
      <div className="w-96 items-start mt-1">
        <p className="text-sm text-gray-600 mr-2">
          {displayConsumedAmount(consumedAmount, allowedAmount)} € dépensés / {displayAllowedAmount(consumedAmount, allowedAmount)} €
        </p>
        <ProgressBar progress={calculatedProgress(consumedAmount, allowedAmount)} />
      </div>
    </div>
  )
}

export default GiftCardDetailStats
