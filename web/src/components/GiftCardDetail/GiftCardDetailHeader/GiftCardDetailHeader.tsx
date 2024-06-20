import React from "react"
import giftCard from "../../../assets/images/gift_card.svg"
import { formatDate, formatTimeDifference } from "../../../utils/date"
import { GiftCardDetailHeaderProps } from "./types"

const GiftCardDetailHeader: React.FC<GiftCardDetailHeaderProps> = ({ name, openingDate, closingDate, state }) => {
  return (
    <div className="flex flex-col items-start mb-4">
      <div className="bg-pink-100 p-4 mb-1 rounded-md">
        <img src={giftCard} alt="gift card logo" className="h-5 w-5" />
      </div>

      <h2 className="text-2xl font-semibold mb-1">{name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 items-center text-sm text-gray-600">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          {formatDate(openingDate ?? "")} - {formatDate(closingDate ?? "")}
        </span>

        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4 mr-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {formatTimeDifference(closingDate ?? "", state === "archived")}
        </span>
      </div>
    </div>
  )
}

export default GiftCardDetailHeader
