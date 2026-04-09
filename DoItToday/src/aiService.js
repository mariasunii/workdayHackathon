const API_KEY = import.meta.env.VITE_ANTHROPIC_KEY;
const API_URL = 'https://api.anthropic.com/v1/messages';

const callClaude = async (prompt) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await res.json();
  return data.content[0].text;
};

export const filterTasksByEnergy = async (tasks, energy) => {
  const prompt = `The user's energy today is: ${energy}.
Here are their tasks: ${JSON.stringify(tasks)}

Return ONLY a JSON array of objects with:
- id (from original task)
- override_reason: "high priority" | "due soon" | null

Include a task if it suits the energy level OR if priority is "high" OR if due date is within 2 days.
No explanation, just the raw JSON array.`;

  const text = await callClaude(prompt);
  return JSON.parse(text);
};

export const suggestDescription = async (taskName) => {
  const prompt = `Break down the task "${taskName}" into 3-5 simple, clear steps for someone with ADHD.
Format it exactly like this:
1. First small step
2. Second small step
3. Third small step

Keep each step very short, one sentence max. Be encouraging and specific. Return a stringified json format where the keys will be task1, task2, etc... and the values will be the steps.`;
  return await callClaude(prompt);
};