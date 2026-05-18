function DisplayTask({ task, handleLater }) {
  return (
    <div>
      <div className="mt-6">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
          Subtasks
        </p>
        <div className="px-4 py-3 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-md whitespace-pre-wrap leading-relaxed">
          {Object.entries(task).map(([key, value]) => (
            <SubTask key={key} taskKey={key} taskValue={value} />
          ))}
        </div>

        <button className="p-2 bg-gray-500 text-blue-600" onClick={handleLater}>
          Do It Later
        </button>
      </div>
    </div>
  );
}

export default DisplayTask;
