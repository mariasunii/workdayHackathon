import { createContext, useContext } from "react";
import { TaskType, EnergyType } from "../types/task";

export interface TaskDataContextType {
  tasks: TaskType[];
  energy: EnergyType;
  setEnergy: (energy: EnergyType) => void;
  addTask: (task: Omit<TaskType, "id">) => void;
}

export const TaskDatacontext = createContext<TaskDataContextType | null>(null);

export function useTaskData(): TaskDataContextType {
  const context = useContext(TaskDatacontext);

  if (!context)
    throw new Error("useTaskData must be used inside TaskDataContextProvider");
  return context;
}
