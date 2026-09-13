import type { Itechnology } from "../Types/Tech";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: Itechnology[];
  stack: Itechnology[];
  onAdd: (technology: Itechnology) => void;
}

const TechnologyList = ({
  technologies,
  stack,
  onAdd,
}: TechnologyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isInStack={stack.some((item) => item.id === technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default TechnologyList;