"use client";
import { BUTTON_COLORS_VARIANTS } from "@/libs/ButtonContants";
import { ButtonProps } from "@/types/ButtonTypes";
import Image from "next/image";

export const Button: React.FC<ButtonProps> = ({
  buttonIcon,
  textContent,
  buttonAltText,
  variantColor,
  iconSize,
}) => {
  const imageSize = iconSize || 12;
  return (
    <button
      type="button"
      className={`border px-3.5 py-2.5 rounded-lg font-semibold text-sm ${BUTTON_COLORS_VARIANTS[variantColor]}`}
    >
      <div className="flex gap-2 items-center">
        {buttonIcon && (
          <div>
            <Image
              src={buttonIcon}
              alt={buttonAltText || ""}
              width={imageSize}
              height={imageSize}
            />
          </div>
        )}
        <div>{textContent}</div>
      </div>
    </button>
  );
};

export default Button;
