"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface SubTaskProps {
  taskKey: string;
  taskValue: string;
}

function SubTask({ taskKey, taskValue }: SubTaskProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between items-center gap-2  p-4 rounded-lg shadow-sm bg-slate-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />

      <label
        className={`cursor-pointer ${
          checked ? "line-through text-gray-400" : ""
        }`}
      >
        <div className="text-left px-3">
          {/* <p>{taskKey}:</p> */}
          <p className="text-app-primary font-bold"> {taskValue}</p>
        </div>
      </label>
      <span>
        <Plus />
      </span>
    </div>
  );
}

export default SubTask;
