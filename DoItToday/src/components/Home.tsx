"use client";

import { useRouter } from "next/navigation";
import { useTaskData } from "../contexts/taskDataContext";
import TaskCard from "./TaskCard";
import { EnergyType } from "../types/task";

const ENERGY_LEVELS: EnergyType[] = ["low", "medium", "high"] as const;

const energyStyles = {
  low: "border-l-4 border-l-blue-400 border-y border-r border-gray-200 bg-white text-gray-700",
  medium:
    "border-l-4 border-l-amber-400 border-y border-r border-gray-200 bg-white text-gray-700",
  high: "border-l-4 border-l-red-400 border-y border-r border-gray-200 bg-white text-gray-700",
};

const energyIcons = {
  low: "🔋",
  medium: "⚡",
  high: "🔥",
};

function Home() {
  const { energy, setEnergy, tasks } = useTaskData();
  const router = useRouter();

  const cycleEnergy = () => {
    const currentIndex = ENERGY_LEVELS.indexOf(energy);
    const nextIndex = (currentIndex + 1) % ENERGY_LEVELS.length;

    setEnergy(ENERGY_LEVELS[nextIndex]);
  };

  const handleAddTask = (): void => {
    router.push("/addTask");
  };

  return (
    <div className="p-6">
      {/** top plane */}
      <div className="flex items-center gap-3 justify-between">
        <h1 className="text-2xl font-extrabold text-gray-800">My Tasks</h1>
        <button
          onClick={cycleEnergy}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md border text-sm font-medium transition-all duration-200 ${energyStyles[energy]}`}
        >
          <span style={{ fontSize: "14px" }}>{energyIcons[energy]}</span>
          <span>{energy} energy</span>
        </button>
      </div>
      <div className={"flex flex-col gap-2"}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex justify-center">
        <button
          onClick={handleAddTask}
          className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full shadow-md hover:bg-gray-700 active:scale-95 transition-all"
        >
          <span className="text-xl">＋</span>
          <span className="text-sm font-medium">Add Task</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
