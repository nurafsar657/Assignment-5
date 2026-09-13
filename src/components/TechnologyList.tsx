import type { Itechnology } from "../Types/Tech";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: Itechnology[];
  stack: Itechnology[];
  onAdd: (technology: Itechnology) => void;
  onRemove: (id: number) => void;
}

const TechnologyList = ({
  technologies,
  stack,
  onAdd,
  onRemove,
}: TechnologyListProps) => {
  return (
    <div>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isInStack={stack.some((item) => item.id === technology.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TechnologyList;