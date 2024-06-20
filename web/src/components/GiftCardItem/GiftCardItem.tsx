import React from "react"
import { Link } from "react-router-dom"
import giftCard from "../../assets/images/gift_card.svg"
import { GiftCard } from "../../types"
import { calculatedProgress } from "../../utils/amount"
import { formatTimeDifference } from "../../utils/date"
import ProgressBar from "../ProgressBar/ProgressBar"

type GiftCardItemProps = {
  card: GiftCard
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ card }) => {
  return (
    <Link to={`/gift-card/${card.id}`} className="block bg-white shadow rounded-lg p-4 hover:bg-gray-100">
      <div className="flex flex-col items-start">
        <div className="bg-pink-100 p-2 rounded-md mb-2">
          <img src={giftCard} alt="gift card logo" className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm text-gray-600">{formatTimeDifference(card.closingDate, card.state === "archived")}</p>
          <h2 className="text-lg font-semibold">{card.name}</h2>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          {card.consumedAmount} € dépensés / {card.allowedAmount} €
        </p>

        <ProgressBar progress={calculatedProgress(card.consumedAmount, card.allowedAmount)} />
      </div>
    </Link>
  )
}

export default GiftCardItem
