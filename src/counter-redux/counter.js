import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementWithParams,
  decrementWithParams,
} from "./state_managment/actions/actions";

export const CounterRedux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrementation = () => dispatch(increment());
  const handleDecrementation = () => dispatch(decrement());
  const handleIncrementWithParams = () => dispatch(incrementWithParams(10));
  const handleDecrementWithParams = () => dispatch(decrementWithParams(10));

  return (
    <>
      <h3>REDUX COUNTER APPLICATION </h3>
      <h3>Counter: {counter} </h3>
      <button onClick={handleIncrementation} style={{ marginRight: "1rem" }}>
        +
      </button>
      <button onClick={handleDecrementation}>-</button>
      <button
        onClick={handleIncrementWithParams}
        style={{ marginLeft: "1rem" }}
      >
        increment With Params
      </button>
      <button
        onClick={handleDecrementWithParams}
        style={{ marginLeft: "1rem" }}
      >
        decrement With Params
      </button>
    </>
  );
};
