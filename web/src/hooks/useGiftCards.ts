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

// fetch the list of active gift cards
const fetchActiveGiftCards = async (): Promise<GiftCard[]> => {
  try {
    const { data } = await axios.get<GiftCard[]>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards?state=active`)

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", error.message)

      throw new Error(`Erreur Axios lors de la récupération des cartes cadeaux actives: ${error.message}`)
    } else {
      console.error("Erreur inconnue:", error)

      throw new Error("Une erreur inconnue est survenue lors de la récupération des cartes cadeaux actives.")
    }
  }
}

// fetch the list of archived gift cards
const fetchArchivedGiftCards = async (): Promise<GiftCard[]> => {
  try {
    const { data } = await axios.get<GiftCard[]>(`${import.meta.env.VITE_SERVER_APP_URL}/gift-cards?state=archived`)

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", error.message)

      throw new Error(`Erreur Axios lors de la récupération des cartes cadeaux archivées: ${error.message}`)
    } else {
      console.error("Erreur inconnue:", error)

      throw new Error("Une erreur inconnue est survenue lors de la récupération des cartes cadeaux archivées.")
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

// custom hook to fetch the list of archived gift cards
export const useArchivedGiftCards = () => {
  return useQuery<GiftCard[], Error>({
    queryKey: ["archivedGiftCards"],
    queryFn: fetchArchivedGiftCards,
  })
}

// custom hook to fetch the list of active gift cards
export const useActiveGiftCards = () => {
  return useQuery<GiftCard[], Error>({
    queryKey: ["activeGiftCards"],
    queryFn: fetchActiveGiftCards,
  })
}

// custom hook to fetch the list of gift cards
export const useGiftCards = () => {
  return useQuery<GiftCard[], Error>({
    queryKey: ["giftCards"],
    queryFn: fetchGiftCards,
  })
}

// custom hook to fetch the detail of a gift card
export const useGiftCardDetail = (id: string) => {
  return useQuery<GiftCard, Error>({
    queryKey: ["giftCard", id],
    queryFn: () => fetchGiftCardDetail(id),
  })
}
