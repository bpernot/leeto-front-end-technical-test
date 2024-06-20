import React from "react"
import familyRestroom from "../../../assets/images/family_restroom.svg"
import stackedLineChart from "../../../assets/images/stacked_line_chart.svg"
import { calculatedProgress } from "../../../utils/amount"
import { formatBeneficiaryNames } from "../../../utils/beneficiary"
import BeneficiaryIcon from "../../BeneficiaryIcon/BeneficiaryIcon"
import ProgressBar from "../../ProgressBar/ProgressBar"
import { BeneficiariesProps } from "./types"

const Beneficiaries: React.FC<BeneficiariesProps> = ({ beneficiaries }) => {
  const eligibleText: string = beneficiaries.length === 1 ? "est éligible" : "sont éligibles"

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 rounded-lg shadow">
        <div className="p-3 rounded-md w-11 mb-2" style={{ backgroundColor: "#DCFCE7" }}>
          <img src={familyRestroom} alt="gift card logo" className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold mb-2 flex items-center">Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?</h3>

        <div className="flex items-center mb-2">
          {beneficiaries.map((beneficiary, index) => (
            <BeneficiaryIcon key={beneficiary.id} type={beneficiary.type} isLast={index === beneficiaries.length - 1} />
          ))}
          <p className="text-gray-600 ml-2">
            {formatBeneficiaryNames(beneficiaries)} {eligibleText}.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-lg shadow">
        <div className="p-3 rounded-md w-11 mb-2" style={{ backgroundColor: "#DCFCE7" }}>
          <img src={stackedLineChart} alt="stacked line chart logo" className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold mb-2 flex items-center">Suivi de consommation</h3>

        <ul className="grid grid-cols-2 gap-4">
          {beneficiaries.map((beneficiary, index) => (
            <React.Fragment key={beneficiary.id}>
              {beneficiaries.length <= 2 && (
                <li className="mb-4 col-span-2 md:col-span-2">
                  <div className="flex items-center">
                    <BeneficiaryIcon type={beneficiary.type} isLast />
                    <div className="ml-2 w-full">
                      <div className="flex items-center">
                        <span>{beneficiary.type === "user" ? "Vous-même" : beneficiary.firstName}</span>
                        <span className="mx-2 text-gray-600">•</span>
                        <span className="text-sm text-gray-600">
                          {beneficiary.consumption.consumedAmount} € / {beneficiary.consumption.allowedAmount} €
                        </span>
                      </div>
                      <ProgressBar
                        progress={calculatedProgress(beneficiary.consumption.consumedAmount, beneficiary.consumption.allowedAmount)}
                      />
                    </div>
                  </div>
                </li>
              )}

              {beneficiaries.length > 2 &&
                (index === 0 ? (
                  <li className="mb-4 col-span-2 md:col-span-2">
                    <div className="flex items-center">
                      <BeneficiaryIcon type={beneficiary.type} isLast />
                      <div className="ml-2 w-full">
                        <div className="flex items-center">
                          <span>{beneficiary.type === "user" ? "Vous-même" : beneficiary.firstName}</span>
                          <span className="mx-2 text-gray-600">•</span>
                          <span className="text-sm mt-0.5 text-gray-600">
                            {beneficiary.consumption.consumedAmount} € / {beneficiary.consumption.allowedAmount} €
                          </span>
                        </div>
                        <ProgressBar
                          progress={calculatedProgress(beneficiary.consumption.consumedAmount, beneficiary.consumption.allowedAmount)}
                        />
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="mb-4 col-span-2 md:col-span-1">
                    <div className="flex items-center">
                      <BeneficiaryIcon type={beneficiaries[index].type} isLast />
                      <div className="ml-2 w-full">
                        <div className="flex items-center">
                          <span>{beneficiaries[index].type === "user" ? "Vous-même" : beneficiaries[index].firstName}</span>
                          <span className="mx-2 text-gray-600">•</span>
                          <span className="text-sm mt-0.5 text-gray-600">
                            {beneficiaries[index].consumption.consumedAmount} € / {beneficiaries[index].consumption.allowedAmount} €
                          </span>
                        </div>
                        <ProgressBar
                          progress={calculatedProgress(
                            beneficiaries[index].consumption.consumedAmount,
                            beneficiaries[index].consumption.allowedAmount
                          )}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Beneficiaries
