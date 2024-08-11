import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { Info } from "@mui/icons-material";
import { INFO } from "../../constants/infoMessage";
import { initializeTodoList, localSet, userInput } from "../../utils/util";
import Button from "@mui/material/Button";
import axios from "axios";
type MemoType = {
  pickDt : string|undefined,
  gubun : string,
}
const Body = ({pickDt,gubun}:MemoType) => {
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);
  const loadselect = async () => {
    if(pickDt && gubun) {
      try {
        const response = await axios.get('http://localhost:4000/api/memo/select', {
          params: {
            pickdt: pickDt,
            pickgb: gubun,
          }
        });
        setTodoitems(response.data.memo);
        console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    }
  } 

  useEffect(() => {
    loadselect();
},[pickDt, gubun])

  // const addItem = () => {
  //   const newData = { id, contents: userInput(INFO.TODO) };
  //   setTodoitems((prev) => {
  //     const updatedData = [...prev, newData];
  //     localSet(updatedData);
  //     return [...prev, newData];
  //   });
  //   setId((prev) => prev + 1);
  // };

  const deleteItem = async (id: number) => {
    if(id) {
      try {
        const response = await axios.post('http://localhost:4000/api/memo/delete', {
          pickid: id,
        });
        
        if (response.data.status) {
          loadselect();
        } else {
          console.error('Failed to delete item:', response.data.error);
        }
      } catch (err) {
        console.error('Error deleting item:', err);
      }
    }
  };

  // useEffect(() => {
  //   initializeTodoList({ setTodoitems, setId });
  // }, []);

  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {todoitems ? 
        todoitems.map((items) => (
          <TodoItem key={items.id} {...items} onDelete={() => deleteItem(items.id)} />
        ))
       : 'empty'
      }
      </div>
    </div>
  );
};

export default Body;
