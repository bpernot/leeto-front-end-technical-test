import React from "react"

type GiftCardDescriptionProps = {
  description: string | undefined
}

const GiftCardDetailDescription: React.FC<GiftCardDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Description de la carte-cadeau</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default GiftCardDetailDescription
