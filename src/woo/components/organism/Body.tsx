import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { Info } from "@mui/icons-material";
import { INFO } from "../../constants/infoMessage";
import { initializeTodoList, localSet, userInput } from "../../utils/util";
import Button from "@mui/material/Button";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

  const addItem = () => {
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      const updatedData = [...prev, newData];
      localSet(updatedData);
      return [...prev, newData];
    });
    setId((prev) => prev + 1);
  };

  const deleteItem = (id: number) => {
    setTodoitems((prev) => {
      const updatedData = prev.filter((value) => value.id !== id);
      localSet(updatedData);
      return updatedData;
    });
  };

  useEffect(() => {
    initializeTodoList({ setTodoitems, setId });
  }, []);

  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {todoitems.map((v, i) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
      </div>
    </div>
  );
};

export default Body;
