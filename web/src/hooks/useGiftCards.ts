import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { GiftCard } from "../types"

// fetch the list of gift cards
const fetchGiftCards = async (): Promise<GiftCard[]> => {
  try {
    const { data } = await axios.get<GiftCard[]>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards`)

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", error.message)

      throw new Error(`Erreur Axios lors de la récupération des cartes cadeaux: ${error.message}`)
    } else {
      console.error("Erreur inconnue:", error)

      throw new Error("Une erreur inconnue est survenue lors de la récupération des cartes cadeaux.")
    }
  }
}

// fetch the detail of a gift card
const fetchGiftCardDetail = async (id: string): Promise<GiftCard> => {
  try {
    const { data } = await axios.get<GiftCard>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards/${id}`)

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", error.message)

      throw new Error(`Erreur Axios lors de la récupération des détails de la carte cadeau: ${error.message}`)
    } else {
      console.error("Erreur inconnue:", error)

      throw new Error("Une erreur inconnue est survenue lors de la récupération des détails de la carte cadeau.")
    }
  }
}

// custom hook to fetch the list of gift cards
export const useGiftCards = (): {
  activeCards: GiftCard[]
  archivedCards: GiftCard[]
  isLoading: boolean
  error: Error | null
} => {
  const { data, isLoading, error } = useQuery<GiftCard[], Error>({
    queryKey: ["giftCards"],
    queryFn: fetchGiftCards,
  })

  const activeCards: GiftCard[] = data?.filter((card) => card.state === "active") || []
  const archivedCards: GiftCard[] = data?.filter((card) => card.state === "archived") || []

  return {
    activeCards,
    archivedCards,
    isLoading,
    error,
  }
}

// custom hook to fetch the detail of a gift card
export const useGiftCardDetail = (id: string): { cardDetail: GiftCard; isLoading: boolean; error: Error | null } => {
  const { data, isLoading, error } = useQuery<GiftCard, Error>({
    queryKey: ["giftCard", id],
    queryFn: () => fetchGiftCardDetail(id),
  })

  const cardDetail: GiftCard = {
    id: data?.id || "",
    name: data?.name || "",
    openingDate: data?.openingDate || "",
    closingDate: data?.closingDate || "",
    state: data?.state || "active",
    allowedAmount: data?.allowedAmount || 0,
    consumedAmount: data?.consumedAmount || 0,
    description: data?.description || "",
    beneficiaries: data?.beneficiaries || [],
  }

  return {
    cardDetail,
    isLoading,
    error,
  }
}
