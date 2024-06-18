import React, { useState } from "react"
import { useGiftCards } from "../hooks/useGiftCards"
import { GiftCard } from "../types"
import GiftCardItem from "./GiftCardItem"

const GiftCardList: React.FC = () => {
  const [state, setState] = useState<"active" | "archived">("active")
  const { activeCards, archivedCards, isLoading, error } = useGiftCards()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading gift cards</div>

  const data: GiftCard[] = state === "active" ? activeCards : archivedCards

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Cartes cadeaux</h1>
      <div className="border-b border-gray-300 mb-6">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 font-semibold focus:outline-none ${
              state === "active" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
            onClick={() => setState("active")}
          >
            Actives ({activeCards.length})
          </button>

          <button
            className={`px-4 font-semibold focus:outline-none ${
              state === "archived" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
            onClick={() => setState("archived")}
          >
            Clôturées ({archivedCards.length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {data.map((card: GiftCard) => (
          <GiftCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default GiftCardList
