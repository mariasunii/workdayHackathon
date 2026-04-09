import { useState, useCallback } from 'react';
import { filterTasksByEnergy, suggestDescription } from './aiService';

const useClaude = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTasksForEnergy = useCallback(async (tasks, energy) => {
    setLoading(true);
    setError(null);
    try {
      const filtered = await filterTasksByEnergy(tasks, energy);
      return filtered;
    } catch (e) {
      setError('AI unavailable, showing all tasks');
      return tasks.map(t => ({ id: t.id, override_reason: null }));
    } finally {
      setLoading(false);
    }
  }, []);

  const getDescriptionSuggestion = useCallback(async (taskName) => {
    if (!taskName.trim()) return '';
    try {
      return await suggestDescription(taskName);
    } catch (e) {
      return '';
    }
  }, []);

  return { getTasksForEnergy, getDescriptionSuggestion, loading, error };
};

export default useClaude;
