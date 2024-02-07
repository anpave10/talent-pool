interface BadgeProps  {
    badgeName: string
    textColor: string
    bgColor: string
    textSize: string
}
export const Badge: React.FC<BadgeProps> = ({badgeName, textColor, bgColor, textSize }) => {
    return(
        <button className={`bg-${bgColor} text-${textSize} text-${textColor} px-2.5 py-1 rounded-3xl`}>
            {badgeName}
        </button>
    )
}

export default Badge;