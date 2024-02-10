import { UploadButtonContentProps } from "@/types/UploadButtonType";
import Image from "next/image";
import UploadCloudIcon from "../../assets/upload-cloud-icon.svg";
import Text from "./Text";

export const UploadButtonContent: React.FC<UploadButtonContentProps> = ({
  name,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-w-56">
      <div className="p-2 rounded-full bg-gray-50">
        <div className="p-2 rounded-full bg-gray-100">
          <Image src={UploadCloudIcon} alt={name} width={20} height={20} />
        </div>
      </div>
      <Text variant="secondary-blue" content={name} />
      {description && <Text variant="label" content={description} />}
    </div>
  );
};

export default UploadButtonContent;
