import { ListContainerProps } from "@/types/ListContainerTypes";
import Text from "./Text";
import PlusIconGray from "../../assets/plus-icon-gray.svg";
import Image from "next/image";

export const ListContainer: React.FC<ListContainerProps> = ({
  children,
  subtitle,
  width,
}) => {
  return (
    <div style={{ width: width ? width : "100%" }} className={`flex flex-col`}>
      <div className="flex justify-between items-center pr-3">
        <Text variant="secondary-bold" content={subtitle} />
        <button>
          <Image src={PlusIconGray} alt="plus icon" width={20} height={20} />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ListContainer;
