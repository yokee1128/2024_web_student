import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

type CheckedLabelProps = {
  isChecked?: boolean;
  contents?: string;
};

const CheckedLabel = ({
  isChecked = false,
  contents = ERROR.NOFUNCTION,
}: CheckedLabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default CheckedLabel;
