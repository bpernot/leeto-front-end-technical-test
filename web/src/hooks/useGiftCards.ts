import { UseQueryResult, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { GiftCard } from "../types"

const fetchGiftCards = async (): Promise<GiftCard[]> => {
  const { data } = await axios.get<GiftCard[]>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards`)

  return data
}

const fetchGiftCardDetail = async (id: string): Promise<GiftCard> => {
  const { data } = await axios.get<GiftCard>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards/${id}`)

  return data
}

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

export const useGiftCardDetail = (id: string): UseQueryResult<GiftCard, Error> => {
  return useQuery({
    queryKey: ["giftCard", id],
    queryFn: () => fetchGiftCardDetail(id),
  })
}
