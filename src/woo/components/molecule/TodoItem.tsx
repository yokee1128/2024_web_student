import { useState } from "react";
import RoundCheckBox from "../atom/RoundCheckBox";
import CheckedLabel from "../atom/CheckedLabel";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  id: number;
  title: string;
  onDelete?: () => void;
};

const TodoItem = ({ title, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundCheckBox: {
      isChecked,
      handleCheck,
    },
    checkedLabel: {
      isChecked,
      title,
    },
    trashIcon: {
      onDelete,
    },
  };
  return (
    <div className="flex items-center gap-5">
      <RoundCheckBox {...obj.roundCheckBox} />
      <CheckedLabel {...obj.checkedLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
