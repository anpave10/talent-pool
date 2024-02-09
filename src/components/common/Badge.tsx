"use client";

import { BADGE_COLOR_VARIANTS } from "@/libs/BadgeConstants";
import { useState } from "react";
import Option from "./Option";

interface BadgeProps {
  badgeName: string;
  variantColor: string;
}
export const Badge: React.FC<BadgeProps> = ({ badgeName, variantColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBadgeClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        type="button"
        className={`${BADGE_COLOR_VARIANTS[variantColor]} px-3 py-3 rounded-3xl font-medium`}
        onClick={handleBadgeClick}
      >
        {badgeName}
      </button>
      {isOpen && (
        <div className="absolute right-[-10rem] mt-1 py-2 min-w-80 shadow-xl border rounded-lg border-gray-100 max-h-60 overflow-y-auto z-[100] bg-white">
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
        </div>
      )}
    </div>
  );
};

export default Badge;
