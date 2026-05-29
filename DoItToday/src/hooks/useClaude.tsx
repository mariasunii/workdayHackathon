import { useState, useCallback } from "react";
import { filterTasksByEnergy, suggestDescription } from "../lib/aiService";
import { EnergyType, TaskType } from "../types/task";

const useClaude = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTasksForEnergy = useCallback(
    async (tasks: TaskType[], energy: EnergyType) => {
      setLoading(true);
      setError(null);
      try {
        const filtered = await filterTasksByEnergy(tasks, energy);
        return filtered;
      } catch (e) {
        setError("AI unavailable, showing all tasks");
        return tasks.map((t) => ({ id: t.id, override_reason: null }));
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const getDescriptionSuggestion = useCallback(async (taskName: string) => {
    if (!taskName.trim()) return "";
    try {
      return await suggestDescription(taskName);
    } catch (e) {
      console.log(e);
      return "";
    }
  }, []);

  return { getTasksForEnergy, getDescriptionSuggestion, loading, error };
};

export default useClaude;
