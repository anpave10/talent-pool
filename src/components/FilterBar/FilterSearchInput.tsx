"use client";

import { SEARCH } from "@/libs/text";
import Button from "../common/Button";
import InputSearch from "../common/InputSearch";

export const FilterSearchInput = () => {
  return (
    <div className="flex gap-5">
      <InputSearch />
      <Button
        textContent={SEARCH}
        variantColor="green"
        buttonAltText={SEARCH}
      />
    </div>
  );
};

export default FilterSearchInput;
