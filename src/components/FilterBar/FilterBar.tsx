"use client";
import Button from "../common/Button";
import PlusIcon from "../../assets/plus-icon.svg";
import { ENGLISH_LEVEL, FAVORITES, HABILITIES, NEW_TALENT } from "@/libs/text";
import InputSearch from "../common/InputSearch";
import Badge from "../common/Badge";
import FilterSearchInput from "./FilterSearchInput";

export const FilterBar = () => {
  return (
    <div className="flex justify-between max-w-screen-2xl m-auto px-10 py-5">
      <div>
        <Button
          variantColor="primary-blue"
          textContent={NEW_TALENT}
          buttonIcon={PlusIcon}
          buttonAltText={NEW_TALENT}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <div>
            <Badge badgeName={HABILITIES} variantColor="gray" />
          </div>
          <div>
            <Badge badgeName={ENGLISH_LEVEL} variantColor="gray" />
          </div>
          <div>
            <Badge badgeName={FAVORITES} variantColor="gray" />
          </div>
        </div>
        <div>
          <FilterSearchInput />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
