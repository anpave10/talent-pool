import { TECH_SKILLS } from "@/libs/text";
import Chip from "../Chip/Chip";
import SkillsContainer from "./SkillsContainer";

export const TechSkills = () => {
  return (
    <SkillsContainer subtitle={TECH_SKILLS} width="60%">
      <>
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
        <Chip variant="primary-blue" name="Javascript - 2" />
      </>
    </SkillsContainer>
  );
};

export default TechSkills;
