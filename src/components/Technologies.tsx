import { use, useState } from "react";
import { toast } from "react-toastify";
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
    const isAlreadyInStack = stack.some(
      (item) => item.id === technology.id
    );

    if (isAlreadyInStack) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((technology) => technology.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Explore the <span className="text-[#ec4899]">Technologies</span>
        </h2>

        <p className="mt-2 text-gray-500">
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