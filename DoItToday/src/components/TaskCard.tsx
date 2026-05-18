import { TaskType } from "../types/task";

interface TaskCardProps {
  task: TaskType;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="p-4 rounded-lg shadow-sm bg-slate-50">
      {/* Task Description */}
      <h2 className="text-lg font-semibold text-black-800">{task.desc}</h2>

      {/* Subtask Count */}
      <p className="text-sm text-gray-500 mt-1">
        Subtasks: {task.subTasks?.length || 0}
      </p>

      {/* Priority */}
      <p
        className={`mt-2 text-xs font-medium px-2 py-1 inline-block rounded 
        ${
          task.priority === "high"
            ? "bg-red-100 text-red-600"
            : task.priority === "mid"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
        }`}
      >
        {task.priority.toUpperCase()} PRIORITY
      </p>
    </div>
  );
}

export default TaskCard;
