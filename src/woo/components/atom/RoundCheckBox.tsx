import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
  isChecked?: boolean;
  handleCheck?: () => void;
};
const RoundCheckBox = ({
  isChecked = false,
  handleCheck = alarm,
}: RoundCheckBoxProps) => {
  return <input onChange={handleCheck} checked={isChecked} type="checkbox" />;
};
export default RoundCheckBox;
