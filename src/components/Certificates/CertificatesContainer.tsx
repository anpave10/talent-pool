import UploadButton from "../common/UploadButton";
import CertificateCard from "./CertificarteCard";

export const CertificatesContainer = () => {
  return (
    <div className="flex justify-between">
      <CertificateCard />
      <CertificateCard />
      <UploadButton />
    </div>
  );
};

export default CertificatesContainer;
