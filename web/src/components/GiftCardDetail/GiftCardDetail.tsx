import React from "react"
import { useParams } from "react-router-dom"
import { useGiftCardDetail } from "../../hooks/useGiftCards"
import GiftCardDetailBeneficiaries from "./GiftCardDetailBeneficiaries/GiftCardDetailBeneficiaries"
import GiftcardDetailDescription from "./GiftCardDetailDescription/GiftCardDetailDescription"
import GiftCardDetailHeader from "./GiftCardDetailHeader/GiftCardDetailHeader"
import GiftCardDetailStats from "./GiftCardDetailStats/GiftCardDetailStats"
import ReturnButton from "./ReturnButton/ReturnButton"

const GiftCardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { cardDetail, isLoading, error } = useGiftCardDetail(id ?? "")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading gift card details</div>

  return (
    <div className="container mx-auto px-4 py-6">
      <ReturnButton />

      <div className="p-6">
        <GiftCardDetailHeader
          name={cardDetail.name}
          openingDate={cardDetail.openingDate}
          closingDate={cardDetail.closingDate}
          state={cardDetail.state}
        />
        <GiftCardDetailStats consumedAmount={cardDetail.consumedAmount} allowedAmount={cardDetail.allowedAmount} />
        <GiftcardDetailDescription description={cardDetail.description} />
        {cardDetail.beneficiaries && <GiftCardDetailBeneficiaries beneficiaries={cardDetail.beneficiaries} />}
      </div>
    </div>
  )
}

export default GiftCardDetail
