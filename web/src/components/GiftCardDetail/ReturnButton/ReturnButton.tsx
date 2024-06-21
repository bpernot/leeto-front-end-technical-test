import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

const ReturnButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()

  return (
    <div className="flex items-center sm:px-5 w-72 ml-6 sm:-ml-0 sm:cursor-pointer">
      <div
        className="flex items-center justify-center w-10 h-10 border cursor-pointer border-gray-300 rounded-lg sm:border-0 sm:w-auto sm:h-auto sm:mr-2 sm:bg-transparent sm:text-blue-600"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black sm:text-blue-600"
          data-testid="icon-svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </div>
      <p className="text-blue-600 hidden sm:block sm:align-middle" onClick={() => navigate(-1)}>
        Retour vers les cartes cadeaux
      </p>
    </div>
  )
}

export default ReturnButton
