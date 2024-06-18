import React from "react"
import { useParams } from "react-router-dom"
import familyRestroom from "../assets/images/family_restroom.svg"
import giftCard from "../assets/images/gift_card.svg"
import stackedLineChart from "../assets/images/stacked_line_chart.svg"
import { useGiftCardDetail } from "../hooks/useGiftCards"
import { formatDate, formatTimeDifference } from "../utils"
import BeneficiaryIcon from "./BeneficiaryIcon"

const GiftCardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGiftCardDetail(id ?? "")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading gift card details</div>

  const progress: number = (data?.consumedAmount! / data?.allowedAmount!) * 100
  const availableAmount: number = data?.allowedAmount! - data?.consumedAmount!

  return (
    <div className="container mx-auto px-4 py-6">
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

      <div className="p-6">
        <div className="flex flex-col items-start mb-4">
          <div className="bg-pink-100 p-3 rounded-md">
            <img src={giftCard} alt="gift card logo" className="h-6 w-6" />
          </div>

          <h2 className="text-2xl font-semibold">{data?.name}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              {formatDate(data?.openingDate!)} - {formatDate(data?.closingDate!)}
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {formatTimeDifference(data?.closingDate!, data?.state === "archived")}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-baseline mb-4">
            <span className="text-4xl font-bold">{availableAmount} €</span>
            <span className="text-gray-600 text-lg">disponibles</span>
          </div>

          <div className="w-96 items-start mt-1">
            <p className="text-sm text-gray-600 mr-2">
              {data?.consumedAmount} € dépensés / {data?.allowedAmount} €
            </p>

            <div className="flex items-center w-full">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>

              <p className="text-sm text-gray-600 ml-2">{progress.toFixed(0)}%</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Description de la carte-cadeau</h3>
          <p className="text-gray-600">{data?.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="p-3 rounded-md w-11 mb-2" style={{ backgroundColor: "#DCFCE7" }}>
              <img src={familyRestroom} alt="gift card logo" className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-semibold mb-2 flex items-center">Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?</h3>
            <div className="flex items-center mb-2">
              {data?.beneficiaries.map((b, index) => (
                <BeneficiaryIcon key={b.id} type={b.type} isLast={index === data.beneficiaries.length - 1} />
              ))}
              <p className="text-gray-600 ml-2">{data?.beneficiaries.map((b) => b.firstName).join(", ")} sont éligibles.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="p-3 rounded-md w-11 mb-2" style={{ backgroundColor: "#DCFCE7" }}>
              <img src={stackedLineChart} alt="stacked line chart logo" className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-semibold mb-2 flex items-center">Suivi de consommation</h3>
            <ul>
              {data?.beneficiaries.map((beneficiary, index) => (
                <li key={beneficiary.id} className="mb-4">
                  <div className="flex items-center">
                    <BeneficiaryIcon type={beneficiary.type} isLast={true} />
                    <span className="ml-2">{beneficiary.firstName}</span>
                    <span className="ml-2 text-sm text-gray-600">
                      {beneficiary.consumption.consumedAmount} € / {beneficiary.consumption.allowedAmount} €
                    </span>
                  </div>

                  <div className={`flex items-center w-full ${index === 0 ? "mt-1" : "mt-4"}`}>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(beneficiary.consumption.consumedAmount / beneficiary.consumption.allowedAmount) * 100}%` }}
                      ></div>
                    </div>

                    <span className="text-sm text-gray-600 ml-2">
                      {((beneficiary.consumption.consumedAmount / beneficiary.consumption.allowedAmount) * 100).toFixed(0)}%
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftCardDetail
