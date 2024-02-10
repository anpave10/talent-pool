import Image from "next/image";
import SimpleCard from "../common/SimpleCard";
import MockupDegree from "../../assets/degree-mockup.svg";
import Text from "../common/Text";

export const CertificateCard = () => {
  return (
    <SimpleCard>
      <div className="p-3 flex flex-col gap-2">
        <div className="">
          <Image
            className="object-cover h-[77px]"
            src={MockupDegree}
            alt="degree mockup"
            width={220}
            height={77}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Text variant="secondary" content="Certificado en frontend" />
          <Text variant="label" content="PDF" />
        </div>
      </div>
    </SimpleCard>
  );
};

export default CertificateCard;
