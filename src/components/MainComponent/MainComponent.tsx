import TalentCardContainer from "../Talent/TalentCardContainer";
import TalentInformation from "../Talent/TalentInformation";

export const MainComponent = () => {
  return (
    <div className="max-w-screen-2xl m-auto px-10 flex h-[80%]">
      <TalentCardContainer />
      <TalentInformation />
    </div>
  );
};

export default MainComponent;
