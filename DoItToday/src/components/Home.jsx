import { useState } from "react";
import { useTaskData } from "../contexts/taskDataContext";

const ENERGY_LEVELS = ["low", "medium", "high"];

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
  const { energy, setEnergy, taskData } = useTaskData();

  const cycleEnergy = () => {
    const currentIndex = ENERGY_LEVELS.indexOf(energy);
    const nextIndex = (currentIndex + 1) % ENERGY_LEVELS.length;

    setEnergy(ENERGY_LEVELS[nextIndex]);
  };

  return (
    <div className="p-6">
      {/** top plane */}
      <div className="flex items-center gap-3 justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
        <button
          onClick={cycleEnergy}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md border text-sm font-medium transition-all duration-200 ${energyStyles[energy]}`}
        >
          <span style={{ fontSize: "14px" }}>{energyIcons[energy]}</span>
          <span>{energy} energy</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
