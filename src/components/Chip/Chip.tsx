import { CHIPS_COLORS_VARIANTS } from "@/libs/ChipConstants";
import { ChipProps } from "@/types/ChipTypes";

export const Chip: React.FC<ChipProps> = ({ variant, name }) => {
  return <div className={`${CHIPS_COLORS_VARIANTS[variant]}`}>{name}</div>;
};

export default Chip;
