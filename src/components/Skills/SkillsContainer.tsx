import { SkillsContainerProps } from "@/types/SkillsContainerTypes";
import Chip from "../Chip/Chip";
import ListContainer from "../common/ListContainer";

export const SkillsContainer: React.FC<SkillsContainerProps> = ({
  width,
  subtitle,
  children,
}) => {
  return (
    <ListContainer subtitle={subtitle} width={width}>
      <div className="flex flex-wrap gap-2 mt-3">{children}</div>
    </ListContainer>
  );
};

export default SkillsContainer;
