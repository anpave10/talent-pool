"use client";
import { DROPDOWN_BUTTON_VARIANTS } from "@/libs/DropdownButton";
import { DropdownButtonProps } from "@/types/DropdownButtonTypes";
import Image from "next/image";
import { useState } from "react";
import Option from "../common/Option";

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  variantColor,
  name,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBadgeClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        type="button"
        className={`${DROPDOWN_BUTTON_VARIANTS[variantColor]} px-3 py-3 rounded-3xl font-medium`}
        onClick={handleBadgeClick}
      >
        <div className="flex items-center gap-2">
          {name}
          {icon && <Image src={icon} alt="icon" width={12} height={12} />}
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-[-10rem] mt-1 py-2 min-w-80 shadow-xl border rounded-lg border-gray-100 max-h-60 overflow-y-auto z-[100] bg-white">
          <Option />
          <Option />
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
