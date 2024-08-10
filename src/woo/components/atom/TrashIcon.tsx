import { LuTrash } from "react-icons/lu";
import { alarm } from "../../utils/util";

export type TrashIconProps = {
  onDelete?: () => void;
};
const TrashIcon = ({ onDelete = alarm }: TrashIconProps) => {
  return <LuTrash onClick={onDelete} />;
};

export default TrashIcon;
