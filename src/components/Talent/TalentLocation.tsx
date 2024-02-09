import Image from "next/image";
import LocationIcon from "../../assets/location-icon.svg";
import React from "react";
import { TalentDetailProps } from "@/types/TalentTypes";

export const TalentDetail: React.FC<TalentDetailProps> = ({
  type,
  firstParameter,
  secondParameter,
  currency,
}) => {
  return (
    <div className="flex gap-2 items-center">
      {type === "location" && (
        <Image src={LocationIcon} alt="location icon" width={15} height={15} />
      )}
      {type === "salary" && currency && (
        <h2 className="font-bold text-dark-gray">
          {currency === "USD" ? "$" : "S/."}
        </h2>
      )}
      <span className="text-secondary-text text-sm font-normal">
        {firstParameter +
          `${type === "location" ? ", " : "-"}` +
          secondParameter}
      </span>
    </div>
  );
};

export default TalentDetail;
