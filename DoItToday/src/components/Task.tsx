"use client";
import { useParams, useRouter } from "next/navigation";
import { useTaskData } from "../contexts/taskDataContext";
import SubTask from "./SubTask";

type TaskProp = {};

type TaskParams = {
  id?: string;
};

export default function Task() {
  const router = useRouter();
  const params = useParams<TaskParams>();
  if (!params?.id) {
    router.push("/");
  }
  const { getTaskById } = useTaskData();
  console.log(params);
  const id = Number(params?.id);

  // const id = Number(params.id);

  const task = getTaskById(id);
  console.log(task);
  return (
    <div className="px-3 py-4 h-full">
      <div className="flex flex-col">
        <span className="flex text-app-muted">Task (#{id})</span>
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
