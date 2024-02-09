import Image from "next/image";
import MockImageTalent from "../../assets/mock-talent.svg";
import EditIcon from "../../assets/edit-icon.svg";
import FavoriteIcon from "../../assets/favorite-icon.svg";
import TalentDetail from "./TalentLocation";
import TalentRating from "./TalentRating";
import Text from "../common/Text";
import DropdownButton from "../DropdownButton/DropdownButton";
import { SEE_CV } from "@/libs/text";
import ExpandIcon from "../../assets/expand-icon.svg";
import Button from "../common/Button";
import PhoneIcon from "../../assets/phone-icon.svg";
import GithubIcon from "../../assets/github-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
export const MainTalentCard = () => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex gap-5">
        <div className="relative">
          <Image
            src={MockImageTalent}
            alt="talent photo"
            width={96}
            height={96}
          />
          <div className="absolute right-0 bottom-0">
            <button className="p-2.5 rounded-full bg-white shadow-md">
              <Image src={EditIcon} alt="edit icon" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-2">
          <div className="flex gap-2">
            <Text variant="primary" content="Juan Lopez Martinez" />
            <Image
              src={FavoriteIcon}
              alt="favorite icon"
              width={20}
              height={20}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Text variant="secondary" content="Full stack developer" />

            <div className="flex gap-3">
              <TalentDetail
                type="location"
                firstParameter="Lima"
                secondParameter="Peru"
              />
              <TalentDetail
                type="salary"
                firstParameter="2500"
                secondParameter="3000"
                currency="USD"
              />
            </div>
            <Image src={EditIcon} alt="edit icon" width={20} height={20} />
          </div>
          <div className="flex gap-2 items-center">
            <TalentRating />

            <Text variant="secondary" content="2 feedbacks" />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <DropdownButton variantColor="blue" name={SEE_CV} icon={ExpandIcon} />
        </div>
        <div className="flex flex-col h-auto justify-between items-end">
          <Button
            variantColor="green"
            textContent="Contactar"
            buttonIcon={PhoneIcon}
            iconSize={20}
          />
          <div className="flex gap-3">
            <button>
              <Image
                src={GithubIcon}
                alt="github icon"
                width={24}
                height={24}
              />
            </button>
            <button>
              <Image
                src={LinkedinIcon}
                alt="linkedin icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTalentCard;
