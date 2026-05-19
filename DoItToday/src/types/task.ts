export interface SubTaskType {
  id: number; // simple unique id
  desc: string;
  priority: "low" | "mid" | "high";
  dueDate: string;
  isDone: boolean;
}

export interface TaskType {
  id: number;
  desc: string;
  priority: "mid" | "low" | "high";
  dueDate: string;
  category: string;
  isDone: boolean;
  subTasks: SubTaskType[];
}

export type EnergyType = "low" | "medium" | "high";
export type TaskPriority = TaskType["priority"];
export type CreateTaskInput = Omit<TaskType, "id">;
