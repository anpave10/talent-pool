"use client";
import Button from "../common/Button";
import PlusIcon from "../../assets/plus-icon.svg";
import { ENGLISH_LEVEL, FAVORITES, HABILITIES, NEW_TALENT } from "@/libs/text";
import InputSearch from "../common/InputSearch";
import Badge from "../common/Badge";

export const FilterBar = () => {
  return (
    <div className="flex justify-between max-w-screen-2xl m-auto px-10 py-5">
      <div>
        <Button
          borderColor="primary-blue"
          bgColor="white"
          textColor="primary-blue"
          textContent={NEW_TALENT}
          buttonIcon={PlusIcon}
          buttonAltText={NEW_TALENT}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <div>
            <Badge
              badgeName={HABILITIES}
              bgColor="secondary-gray"
              textColor="main-gray"
              textSize="base"
            />
          </div>
          <div>
            <Badge
              badgeName={ENGLISH_LEVEL}
              bgColor="secondary-gray"
              textColor="main-gray"
              textSize="base"
            />
          </div>
          <div>
            <Badge
              badgeName={FAVORITES}
              bgColor="secondary-gray"
              textColor="main-gray"
              textSize="base"
            />
          </div>
        </div>
        <div>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
