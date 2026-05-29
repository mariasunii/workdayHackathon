"use client";

import { useMemo, useReducer, useState } from "react";
import { TaskDatacontext } from "./taskDataContext";

import type { CreateTaskInput, EnergyType, TaskType } from "../types/task";

const initialTasks: TaskType[] = [
  {
    id: 1,
    desc: "Take morning medication",
    priority: "high",
    dueDate: "2026-04-09",
    category: "Health",
    isDone: false,
    subTasks: [
      {
        id: 11,
        desc: "Check pill organiser",
        priority: "high",
        dueDate: "2026-04-09",
        isDone: false,
      },
    ],
  },
  {
    id: 2,
    desc: "Complete project proposal",
    priority: "high",
    dueDate: "2026-04-15",
    category: "Work",
    isDone: false,
    subTasks: [
      {
        id: 21,
        desc: "Write executive summary",
        priority: "high",
        dueDate: "2026-04-12",
        isDone: false,
      },
      {
        id: 22,
        desc: "Prepare budget breakdown",
        priority: "mid",
        dueDate: "2026-04-13",
        isDone: false,
      },
    ],
  },
  {
    id: 3,
    desc: "Weekly grocery shopping",
    priority: "mid",
    dueDate: "2026-04-10",
    category: "Personal",
    isDone: false,
    subTasks: [
      {
        id: 31,
        desc: "Write shopping list",
        priority: "mid",
        dueDate: "2026-04-10",
        isDone: false,
      },
    ],
  },
];

interface TaskDataContextProviderProps {
  children: React.ReactNode;
}

type TaskAction = { type: "task/add"; payload: CreateTaskInput };

function taskReducer(tasks: TaskType[], action: TaskAction): TaskType[] {
  switch (action.type) {
    case "task/add":
      return [
        ...tasks,
        {
          ...action.payload,
          id: Date.now(),
          subTasks: action.payload.subTasks ?? [],
          isDone: action.payload.isDone ?? false,
        },
      ];
    default:
      return tasks;
  }
}

function TaskDataContextProvider({ children }: TaskDataContextProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [energy, setEnergy] = useState<EnergyType>("medium");

  const value = useMemo(
    () => ({
      tasks,
      energy,
      setEnergy,
      addTask: (newTask: CreateTaskInput) => {
        dispatch({ type: "task/add", payload: newTask });
      },
      getTaskById: (id: number) => {
        return tasks.find((task) => task.id == id);
      },
    }),
    [tasks, energy],
  );

  return (
    <TaskDatacontext.Provider value={value}>
      {children}
    </TaskDatacontext.Provider>
  );
}

export default TaskDataContextProvider;
