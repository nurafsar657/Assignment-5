import type { Itechnology } from "../Types/Tech";

interface TechnologyCardProps {
  technology: Itechnology;
  isInStack: boolean;
  onAdd: (technology: Itechnology) => void;
  onRemove: (id: number) => void;
}

const TechnologyCard = ({
  technology,
  isInStack,
  onAdd,
  onRemove,
}: TechnologyCardProps) => {
  return (
    <div>
      {technology.badge && (
        <span>{technology.badge}</span>
      )}

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <p>{technology.category}</p>

      <p>{technology.level}</p>

      <p>⭐ {technology.rating}</p>

      <button
        onClick={() =>
          isInStack
            ? onRemove(technology.id)
            : onAdd(technology)
        }
      >
        {isInStack ? "Remove from Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;