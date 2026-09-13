import type { Itechnology } from "../Types/Tech";

interface TechnologyCardProps {
  technology: Itechnology;
  isInStack: boolean;
  onAdd: (technology: Itechnology) => void;
}

const TechnologyCard = ({
  technology,
  isInStack,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div
      className={`border rounded-2xl p-6 bg-white flex flex-col justify-between transition-all ${
        isInStack ? "border-[#ec4899] border-2 ring-1 ring-[#ec4899]" : "border-gray-200"
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* Direct image logo render */}
          {technology.image && (
            <img
              src={technology.image}
              alt={technology.name}
              className="w-8 h-8 object-contain"
            />
          )}
          {technology.badge && (
            <span className="bg-[#fdf2f8] text-[#ec4899] text-xs px-2.5 py-1 rounded-full font-semibold">
              {technology.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-900">{technology.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {technology.description}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md text-slate-600 font-medium">
            {technology.category}
          </span>
          <span className="bg-gray-100 px-2.5 py-1 rounded-md text-slate-600 font-medium">
            {technology.level}
          </span>
          <span className="ml-auto text-amber-500 font-semibold flex items-center gap-1">
            ★ {technology.rating}
          </span>
        </div>

        <button
          disabled={isInStack}
          onClick={() => onAdd(technology)}
          className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
            isInStack
              ? "bg-[#fdf2f8] text-[#ec4899] cursor-not-allowed border border-pink-200 font-semibold"
              : "bg-[#0f172a] text-white hover:bg-slate-800"
          }`}
        >
          {isInStack ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;