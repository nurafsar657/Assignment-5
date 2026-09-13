import { use, useState } from "react";
import type { Itechnology } from "../Types/Tech";
import TechnologyList from "./TechnologyList";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Itechnology[]>([]);

  const handleAdd = (technology: Itechnology) => {
    setStack([...stack, technology]);
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter((technology) => technology.id !== id));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Technologies */}
        <div className="lg:col-span-2">
          <TechnologyList
            technologies={technologies}
            stack={stack}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        </div>

        {/* Your Stack */}
        <div>
          <YourStack
            stack={stack}
            onRemove={handleRemove}
          />
        </div>

      </div>
    </section>
  );
};

export default Technologies;