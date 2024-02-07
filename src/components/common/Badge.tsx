"use client";
interface BadgeProps {
  badgeName: string;
  textColor: string;
  bgColor: string;
  textSize: string;
}
export const Badge: React.FC<BadgeProps> = ({
  badgeName,
  textColor,
  bgColor,
  textSize,
}) => {
  return (
    <button
      type="button"
      className={`bg-${bgColor} text-${textSize} text-${textColor} px-3 py-3 rounded-3xl font-medium`}
    >
      {badgeName}
    </button>
  );
};

export default Badge;
