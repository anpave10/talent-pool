import { SOFT_SKILLS } from "@/libs/text";
import Chip from "../Chip/Chip";
import SkillsContainer from "./SkillsContainer";

export const SoftSkills = () => {
  return (
    <SkillsContainer subtitle={SOFT_SKILLS} width="40%">
      <>
        <Chip variant="red" name="Javascript - 2" />
        <Chip variant="red" name="Javascript - 2" />
        <Chip variant="red" name="Javascript - 2" />
      </>
    </SkillsContainer>
  );
};

export default SoftSkills;
