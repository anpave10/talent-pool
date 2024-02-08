"use client";
import Image from "next/image";
import MockTalentPhoto from "../../assets/mock-talent.svg";
import LocationIcon from "../../assets/location-icon.svg";
import FavoriteIcon from "../../assets/favorite-icon.svg";
import { Rating } from "@mui/material";
import { useState } from "react";
export const TalentCard = () => {
  const [value, setValue] = useState<number | null>(2);
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
        <h3 className="font-bold text-main-text text-base">
          Juan Lopez Martinez
        </h3>
        <span className="text-secondary-text text-sm font-normal">
          Full stack developer
        </span>
        <div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <Image
              src={LocationIcon}
              alt="location icon"
              width={15}
              height={15}
            />
            <span className="text-secondary-text text-sm font-normal">
              Lima, Perú
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="font-bold text-dark-gray">$</h2>
            <span className="text-secondary-text text-sm font-normal">
              2,500-3,000
            </span>
          </div>
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
