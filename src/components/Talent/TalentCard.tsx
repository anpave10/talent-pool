"use client";
import Image from "next/image";
import MockTalentPhoto from "../../assets/mock-talent.svg";
import FavoriteIcon from "../../assets/favorite-icon.svg";
import TalentDetail from "./TalentLocation";
import TalentRating from "./TalentRating";
import Text from "../common/Text";
export const TalentCard = () => {
  return (
    <div className="flex gap-6 min-w-65 px-4 py-3.5">
      <div className="rounded-full">
        <Image
          src={MockTalentPhoto}
          alt="talent photo"
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-col relative w-full">
        <Text variant="primary" content="Juan Lopez Martinez" />
        <Text variant="secondary" content="Full stack developer" />
        <div>
          <TalentRating />
        </div>
        <div className="flex gap-5">
          <TalentDetail
            type="location"
            firstParameter="Lima"
            secondParameter="Peru"
          />
          <TalentDetail
            type="salary"
            firstParameter="2500"
            secondParameter="3000"
            currency="USD"
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={FavoriteIcon}
            alt="favorite icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};
export default TalentCard;
