import React, { useState } from "react"
import { useGiftCards } from "../../hooks/useGiftCards"
import { GiftCard } from "../../types"
import GiftCardItem from "../GiftCardItem/GiftCardItem"
import GiftCardTabs from "./GiftCardTabs/GiftCardTabs"

const GiftCardList: React.FC = () => {
  const [state, setState] = useState<"active" | "archived">("active")
  const { activeCards, archivedCards, isLoading, error } = useGiftCards()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading gift cards</div>

  const data: GiftCard[] = state === "active" ? activeCards : archivedCards

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Cartes cadeaux</h1>
      <GiftCardTabs state={state} setState={setState} activeCards={activeCards} archivedCards={archivedCards} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {data.map((card: GiftCard) => (
          <GiftCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default GiftCardList
