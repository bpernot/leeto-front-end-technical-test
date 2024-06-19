import React from "react"
import ProgressBar from "../../ProgressBar/ProgressBar"
import { GiftCardStatsProps } from "./types"

const GiftCardStats: React.FC<GiftCardStatsProps> = ({ consumedAmount, allowedAmount }) => {
  const progress: number = ((consumedAmount ?? 0) / (allowedAmount ?? 0)) * 100
  const availableAmount: number = (allowedAmount ?? 0) - (consumedAmount ?? 0)

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-baseline mb-4">
        <span className="text-4xl font-bold">{availableAmount} €</span>
        <span className="text-gray-600 text-lg">disponibles</span>
      </div>

      <div className="w-96 items-start mt-1">
        <p className="text-sm text-gray-600 mr-2">
          {consumedAmount} € dépensés / {allowedAmount} €
        </p>

        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}

export default GiftCardStats
