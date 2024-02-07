import Image from "next/image";
import SearchIcon from "../../assets/search-icon.svg";
import { INPUT_SEARCH_PLACEHOLDER } from "@/libs/text";

export const InputSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={INPUT_SEARCH_PLACEHOLDER}
        className="w-80 border border-[#D0D5DD] rounded-3xl pl-9 pr-2.5 py-2.5 shadow-md"
      />
      <div className="absolute top-[35%] left-3">
        <Image src={SearchIcon} alt="search icon" width={15} height={15} />
      </div>
    </div>
  );
};

export default InputSearch;
