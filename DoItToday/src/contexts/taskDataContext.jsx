import { createContext, useContext } from "react";

export const TaskDatacontext = createContext();

export function useTaskData() {
  const context = useContext(TaskDatacontext);
  return context;
}
