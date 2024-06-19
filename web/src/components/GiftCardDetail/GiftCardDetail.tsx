import React from "react"
import { useParams } from "react-router-dom"
import { useGiftCardDetail } from "../../hooks/useGiftCards"
import GiftCardDetailBeneficiaries from "./GiftCardDetailBeneficiaries/GiftCardDetailBeneficiaries"
import GiftCardDescription from "./GiftCardDetailDescription/GiftCardDetailDescription"
import GiftCardDetailHeader from "./GiftCardDetailHeader/GiftCardDetailHeader"
import GiftCardDetailStats from "./GiftCardDetailStats/GiftCardDetailStats"
import ReturnButton from "./ReturnButton/ReturnButton"

const GiftCardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGiftCardDetail(id ?? "")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading gift card details</div>

  return (
    <div className="container mx-auto px-4 py-6">
      <ReturnButton />

      <div className="p-6">
        <GiftCardDetailHeader name={data?.name} openingDate={data?.openingDate} closingDate={data?.closingDate} state={data?.state} />
        <GiftCardDetailStats consumedAmount={data?.consumedAmount} allowedAmount={data?.allowedAmount} />
        <GiftCardDescription description={data?.description} />
        {data?.beneficiaries && <GiftCardDetailBeneficiaries beneficiaries={data?.beneficiaries} />}
      </div>
    </div>
  )
}

export default GiftCardDetail
