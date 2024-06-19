import React from "react"

const ReturnButton: React.FC = () => {
  return (
    <div className="flex items-center px-5 cursor-pointer" onClick={() => window.history.back()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 text-blue-600 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      <p className="text-blue-600">Retour vers les cartes cadeaux</p>
    </div>
  )
}

export default ReturnButton
