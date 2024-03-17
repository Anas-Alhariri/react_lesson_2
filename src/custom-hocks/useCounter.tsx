import { useState } from "react";
const useCounter = (initialValue: number): [number, Function] => {
  const [count, setCount] = useState(initialValue);
  return [count, setCount];
};

export default useCounter;
