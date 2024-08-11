import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

type CheckedLabelProps = {
  isChecked?: boolean;
  title?: string;
};

const CheckedLabel = ({
  isChecked = false,
  title = ERROR.NOFUNCTION,
}: CheckedLabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {title}
    </span>
  );
};

export default CheckedLabel;
