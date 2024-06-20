import React from "react"
import { Link } from "react-router-dom"
import giftCard from "../../assets/images/gift_card.svg"
import { GiftCard } from "../../types"
import { formatTimeDifference } from "../../utils/date"
import ProgressBar from "../ProgressBar/ProgressBar"

type GiftCardItemProps = {
  card: GiftCard
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ card }) => {
  const progress: number = (card.consumedAmount / card.allowedAmount) * 100

  return (
    <Link to={`/gift-card/${card.id}`} className="block bg-white shadow rounded-lg p-4 hover:bg-gray-100">
      <div className="flex flex-col items-start">
        <div className="bg-pink-100 p-3 rounded-md mb-2">
          <img src={giftCard} alt="gift card logo" className="h-6 w-6" />
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

        <ProgressBar progress={progress} />
      </div>
    </Link>
  )
}

export default GiftCardItem