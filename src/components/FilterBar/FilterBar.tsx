import Button from "../common/Button";
import PlusIcon from "../../assets/plus-icon.svg";

export const FilterBar = () => {
  return (
    <div className="flex justify-between max-w-2xl m-auto">
      <div>
        <Button
          borderColor="#0B85C3"
          bgColor="white"
          textColor="#0B85C3"
          textContent="Nuevo Talento"
          buttonIcon={PlusIcon}
          buttonAltText="Nuevo Talento"
        />
      </div>
      <div>B</div>
    </div>
  );
};

export default FilterBar;
