import type { Itechnology } from "../Types/Tech";

interface YourStackProps {
  stack: Itechnology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white sticky top-6 shadow-xs">
      <h3 className="text-xl font-bold mb-1 text-slate-900">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-5">
        {stack.length === 0
          ? "No technology selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex justify-between items-center p-3 bg-white rounded-xl border border-gray-200 text-sm shadow-xs"
              >
                <div className="flex items-center gap-3">
                  {/* Direct image logo render */}
                  {technology.image && (
                    <img
                      src={technology.image}
                      alt={technology.name}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">
                      {technology.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {technology.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400 hover:text-red-500 text-base px-2 py-1 font-light transition-colors cursor-pointer"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-2 py-2.5 border border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8] font-medium text-sm rounded-xl transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;