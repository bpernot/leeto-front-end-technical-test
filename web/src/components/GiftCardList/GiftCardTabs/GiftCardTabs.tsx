import { GiftCardTabsProps } from "./types"

export default function GiftCardTabs({ state, setState, activeCards, archivedCards }: GiftCardTabsProps) {
  return (
    <div className="border-b border-gray-300 mb-6">
      <div className="flex space-x-4">
        <button
          style={{ marginBottom: "-1.4px" }}
          className={`px-4 py-2 font-semibold focus:outline-none relative ${
            state === "active" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
          onClick={() => setState("active")}
        >
          Actives ({activeCards.length})
        </button>

        <button
          style={{ marginBottom: "-1.4px" }}
          className={`px-4 py-2 font-semibold focus:outline-none relative ${
            state === "archived" ? "text-blue-600 border-b-2 border-blue-600 -mb-0.5" : "text-gray-600"
          }`}
          onClick={() => setState("archived")}
        >
          Clôturées ({archivedCards.length})
        </button>
      </div>
    </div>
  )
}
