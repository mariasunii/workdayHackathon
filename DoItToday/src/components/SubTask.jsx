import { useState } from "react";

function SubTask({ taskKey, taskValue }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-2 p-2 border-b">
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
        <strong>{taskKey}:</strong> {taskValue}
      </label>
    </div>
  );
}

export default SubTask;
