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
    const isAlreadyInStack = stack.some((item) => item.id === technology.id);
    if (isAlreadyInStack) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }
    setStack([...stack, technology]);
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter((technology) => technology.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Explore the <span className="text-[#ec4899]">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Pick technologies to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <TechnologyList
            technologies={technologies}
            stack={stack}
            onAdd={handleAdd}
          />
        </div>

        <div className="lg:col-span-1">
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;