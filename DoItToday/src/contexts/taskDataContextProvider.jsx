import { useState } from "react";
import { TaskDatacontext } from "./taskDataContext";

const task = [
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

function TaskDataContextProvider({ children }) {
  const [energy, setEnergy] = useState("medium");

  return (
    <TaskDatacontext.Provider
      value={{ taskData: task, energy: energy, setEnergy: setEnergy }}
    >
      {children}
    </TaskDatacontext.Provider>
  );
}

export default TaskDataContextProvider;
