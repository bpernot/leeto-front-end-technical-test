import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { GiftCard } from "../types"

// fetch the list of gift cards
const fetchGiftCards = async (): Promise<GiftCard[]> => {
  const { data } = await axios.get<GiftCard[]>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards`)

  return data
}

// fetch the detail of a gift card
const fetchGiftCardDetail = async (id: string): Promise<GiftCard> => {
  const { data } = await axios.get<GiftCard>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards/${id}`)

  return data
}

// custom hook to fetch the list of gift cards
export const useGiftCards = (): {
  activeCards: GiftCard[]
  archivedCards: GiftCard[]
  isLoading: boolean
  error: Error | null
} => {
  const { data, isLoading, error } = useQuery({
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
  const { data, isLoading, error } = useQuery({
    queryKey: ["giftCard", id],
    queryFn: () => fetchGiftCardDetail(id),
  })

  const cardDetail: GiftCard = {
    id: data?.id || "",
    name: data?.name || "",
    openingDate: data?.openingDate || "",
    closingDate: data?.closingDate || "",
    state: data?.state,
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
