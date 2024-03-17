import "./App.css";
import useCounter from "./custom-hocks/useCounter";

function App() {
  const [count, setCount] = useCounter(0);

  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-3xl font-bold underline">{count}</h3>
      </div>
      <div className="flex gap-2 justify-center mt-4">
        <button
          className="border-2 border-black p-2 bg-red-400 hover:bg-red-500 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="border-2 border-black p-2 bg-red-400 hover:bg-red-500 rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="border-2 border-black p-2 bg-red-400 hover:bg-red-500 rounded-lg"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
