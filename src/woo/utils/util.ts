import { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../components/molecule/TodoItem";
import { APIKEY } from "../constants/apiKey";
import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);
export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));
export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";

type initializeTodoListParams = {
  setTodoitems: Dispatch<SetStateAction<TodoItemProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
};

export const initializeTodoList = ({
  setTodoitems,
  setId,
}: initializeTodoListParams) => {
  const mappedArray = JSON.parse(localGet()).map((v: any, i: number) => ({
    id: i,
    contents: v.contents,
  }));
  localSet(mappedArray);
  setTodoitems(mappedArray);
  setId(mappedArray.length);
};
