import { Dispatch, SetStateAction } from "react"
import { GiftCard } from "../../../types"

export type GiftCardTabsProps = {
  state: string
  setState: Dispatch<SetStateAction<"active" | "archived">>
  activeCards: GiftCard[]
  archivedCards: GiftCard[]
}
