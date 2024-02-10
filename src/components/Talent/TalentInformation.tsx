import CertificatesContainer from "../Certificates/CertificatesContainer";
import SkillsContainer from "../Skills/SkillsContainer";
import SoftSkills from "../Skills/SoftSkills";
import TechSkills from "../Skills/TechSkills";
import Text from "../common/Text";
import MainTalentCard from "./MainTalentCard";

export const TalentInformation = () => {
  return (
    <div className="border border-light-gray rounded-xl p-5 w-full ml-5 flex flex-col">
      <MainTalentCard />
      <CertificatesContainer />
      <div className="flex">
        <TechSkills />
        <SoftSkills />
      </div>
      <div className="mt-5">
        <Text
          variant="secondary"
          content="Hello! This is Juan Lopez speaking, I’m a Full-Stack Developer specializing in Front-End Technologies
and also a student at Holberton School."
        />
      </div>
    </div>
  );
};

export default TalentInformation;
