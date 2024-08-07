import React, { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useActiveGiftCards, useArchivedGiftCards } from "../../hooks/useGiftCards"
import { GiftCard } from "../../types"
import GiftCardItem from "../GiftCardItem/GiftCardItem"
import GiftCardTabs from "./GiftCardTabs/GiftCardTabs"

const GiftCardList: React.FC = () => {
  const [state, setState] = useState<"active" | "archived">("active")
  const navigate: NavigateFunction = useNavigate()
  const { data: activeCards, isLoading: isActiveLoading, error: activeError } = useActiveGiftCards()
  const { data: archivedCards, isLoading: isArchivedLoading, error: archivedError } = useArchivedGiftCards()
  const isLoading = state === "active" ? isActiveLoading : isArchivedLoading
  const error = state === "active" ? activeError : archivedError
  const data = state === "active" ? activeCards : archivedCards

  if (isLoading) return <div>Loading...</div>
  if (error)
    return (
      <>
        <div>Error loading gift cards: {error.message}</div>
        <button onClick={() => navigate("/")} className="border border-gray-300 rounded px-4 py-2 mb-6">
          Retour à la page d'accueil
        </button>
      </>
    )

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Cartes cadeaux</h1>
      <GiftCardTabs state={state} setState={setState} activeCards={activeCards || []} archivedCards={archivedCards || []} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {data && data.map((card: GiftCard) => <GiftCardItem key={card.id} card={card} />)}
      </div>
    </div>
  )
}

export default GiftCardList
