import { UPLOAD_FILE } from "@/libs/text";
import SimpleCard from "./SimpleCard";
import UploadButtonContent from "./UploadButtonContent";

export const UploadButton = () => {
  return (
    <SimpleCard>
      <UploadButtonContent name={UPLOAD_FILE} />
    </SimpleCard>
  );
};

export default UploadButton;
