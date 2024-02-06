import Image from "next/image";
import SearchIcon from "../../assets/search-icon.svg";

export const InputSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar talento o puesto"
        className="w-80 border border-[#D0D5DD] rounded-3xl pl-9 pr-2.5 py-2.5 shadow-md"
      />
      <div className="absolute top-[35%] left-3">
        <Image src={SearchIcon} alt="search icon" width={15} height={15} />
      </div>
    </div>
  );
};

export default InputSearch;
