import type { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const useCounterSlice = (): [number, Function] => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return [count, dispatch];
};

export default useCounterSlice;
