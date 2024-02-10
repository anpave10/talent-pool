import { SimpleCardProps } from "@/types/SimpleCardTypes";
import { ReactNode } from "react";

export const SimpleCard: React.FC<SimpleCardProps> = ({ children }) => {
  return <div className="bg-gray-50 rounded-md">{children}</div>;
};

export default SimpleCard;
