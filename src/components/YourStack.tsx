import type { Itechnology } from "../Types/Tech";

interface YourStackProps {
  stack: Itechnology[];
  onRemove: (id: number) => void;
}

const YourStack = ({ stack, onRemove }: YourStackProps) => {
  return (
    <div>
      <h2>Your Stack</h2>

      {stack.length === 0 ? (
        <p>No technologies selected yet.</p>
      ) : (
        <div>
          {stack.map((technology) => (
            <div key={technology.id}>
              <span>{technology.name}</span>

              <button onClick={() => onRemove(technology.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;