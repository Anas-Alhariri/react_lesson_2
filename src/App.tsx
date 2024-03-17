import { useEffect, useRef, useState } from "react";
import "./App.css";
import useCounterSlice from "./custom-hocks/useCounterSlice";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./redux/counterSlice";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const userEmail = useRef<string | null>(null);
  const [usernumber, setUsernumber] = useState(0);
  const [count, dispatch] = useCounterSlice();

  const hideDiv = () => {
    console.log({ divRef });
    console.log({ userEmail });
    if (divRef.current) {
      // divRef.current.style.display = "none";
    }
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  let x = 0;
  const y = useRef(0);
  const timeoutId = useRef<number>(null);
  useEffect(() => {
    console.log("New interval was defined");
    //@ts-expect-error
    timeoutId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      dispatch(increment());
    }, 1000);

    return () => {
      clearInterval(timeoutId.current!);
      console.log("Interval was cleared");
    };
  }, [usernumber]);

  const updateRef = () => {
    y.current = 5;
  };

  const toggleHideAll = () => {
    if (divRef.current) {
      if (divRef.current.style.display === "none") {
        divRef.current.style.display = "block";
      } else {
        divRef.current.style.display = "none";
      }
    }
  };

  return (
    <>
      <div ref={divRef} onClick={hideDiv} className="bg-red-400">
        <h1 className="text-3xl font-bold text-center">{count}</h1>
        <div className="flex justify-center mt-3.5">
          <button
            className="border border-red-500 min-w-[100px] bg-slate-500 text-white mr-2"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="border border-red-500 min-w-[100px] bg-slate-500 text-white mr-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            className="border border-red-500 min-w-[100px] bg-slate-500 text-white mr-2"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>

        <div className="flex flex-col justify-center mt-3.5">
          <h1>Increment by amount section</h1>
          <button
            className="border border-red-500 min-w-[100px] bg-slate-500 text-white mr-2"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            increment by 5
          </button>
        </div>
        {x}
        <br />
        {y.current}
        <br />
        <button onClick={updateRef}>update ref value</button>
        <br />
      </div>
      <button
        className="border-2 border-black p-2 bg-red-400 hover:bg-red-500 rounded-lg"
        onClick={toggleHideAll}
      >
        hide all
      </button>
      <h1>{time}</h1>
      <input
        type="text"
        name=""
        id=""
        defaultValue={usernumber}
        onChange={(e) => setUsernumber(Number(e.target.value))}
      />
    </>
  );
}

export default App;
