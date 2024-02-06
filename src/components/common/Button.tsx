import Image from "next/image";
interface ButtonProps {
  bgColor: string;
  buttonIcon?: HTMLImageElement;
  textColor: string;
  textContent: string;
  borderColor: string;
  buttonAltText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  bgColor,
  borderColor,
  buttonIcon,
  textColor,
  textContent,
  buttonAltText,
}) => {
  return (
    <button
      type="button"
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: textColor,
      }}
      className={`border px-3.5 py-2.5 rounded-lg font-semibold text-sm`}
    >
      <div className="flex gap-2 items-center">
        {buttonIcon && (
          <div>
            <Image
              src={buttonIcon}
              alt={buttonAltText || ""}
              width={12}
              height={12}
            />
          </div>
        )}
        <div>{textContent}</div>
      </div>
    </button>
  );
};

export default Button;
