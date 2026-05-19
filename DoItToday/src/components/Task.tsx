import { useParams } from "react-router-dom";
import { useTaskData } from "../contexts/taskDataContext";
import SubTask from "./SubTask";

type TaskProp = {};

function Task() {
  const params = useParams();
  const { getTaskById } = useTaskData();
  const id = Number(params.id);

  const task = getTaskById(id);
  console.log(task);
  return (
    <div className="px-3 py-4 h-full">
      <div className="flex flex-col">
        <span className="flex text-app-muted">Task (#{params.id})</span>
        <h1 className="text-left leading-none">{task?.desc}</h1>
        <span className="self-start text-left bg-app-surface-muted text-app-text px-4 rounded-2xl">
          {task?.dueDate}
        </span>
      </div>

      <div className="my-5 flex gap-4 flex-col h-full">
        {task?.subTasks.map((sT, i) => {
          return (
            <SubTask
              taskKey={`task${i + 1}`}
              taskValue={sT.desc}
              key={`task${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Task;
