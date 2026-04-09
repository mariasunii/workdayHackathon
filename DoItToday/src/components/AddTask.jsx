import { useState } from "react";
import useClaude from "../hooks/useClaude";
import SubTask from "./SubTask";
import { useTaskData } from "../contexts/taskDataContext";

function parseAIResponse(text) {
  const match = text.match(/```json\s*([\s\S]*?)\s*```/);

  if (!match) {
    throw new Error("No JSON block found");
  }

  return JSON.parse(match[1]);
}

function AddTask() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getDescriptionSuggestion } = useClaude();
  const { addTask } = useTaskData();

  const breakDownTask = async (taskText) => {
    setLoading(true);
    setError(null);
    setResult(null);
    const resultArr = [];

    try {
      const response = await getDescriptionSuggestion(taskText);
      console.log(response);
      const data = parseAIResponse(response);
      console.log(data);
      // const data = await response.json();
      // const text = data.content?.[0]?.text;
      resultArr.push(data);
      setResult(resultArr);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    breakDownTask(task);
  };

  const handleLater = (e) => {
    e.preventDefault();
    if (!result) return;
    //   {
    //   id: 1,
    //   desc: "Take morning medication",
    //   priority: "high",
    //   dueDate: "2026-04-09",
    //   category: "Health",
    //   isDone: false,
    //   subTasks: [
    //     {
    //       id: 11,
    //       desc: "Check pill organiser",
    //       priority: "high",
    //       dueDate: "2026-04-09",
    //       isDone: false,
    //     },
    //   ],
    // },
    // const newTask = {
    //   desc: task,
    //   id: new Date(),
    // };
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-medium text-gray-800 mb-6">
        What do you need to do today?
      </h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task here"
          disabled={loading}
          className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !task.trim()}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Breaking down..." : "Let's go"}
        </button>
      </form>

      {/* Loading state */}
      {loading && (
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          Breaking your task down...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="mt-6 px-4 py-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
          {error}
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="mt-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
            Subtasks
          </p>
          <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md whitespace-pre-wrap leading-relaxed">
            {Object.entries(result[0]).map(([key, value]) => (
              <SubTask key={key} taskKey={key} taskValue={value} />
            ))}
          </div>

          <button
            className="p-2 bg-gray-500 text-blue-600"
            onClick={handleLater}
          >
            Do It Later
          </button>
        </div>
      )}
    </div>
  );
}

export default AddTask;
