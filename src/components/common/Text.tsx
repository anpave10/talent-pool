import { TEXT_VARIANTS } from "@/libs/TextConstants";
import { TextProps } from "@/types/TextTypes";

export const Text: React.FC<TextProps> = ({variant, content}) => {
    return (
      <div className={`${TEXT_VARIANTS[variant]}`}>
        {content}
      </div>
    );
}

export default Text