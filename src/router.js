import { Route, Routes } from "react-router-dom";
import { Counter } from "./counter/counter";
import { CounterRedux } from "./counter-redux/counter";

export const Router=() => {
    return (<Routes>
    <Route path="counter" element={<Counter/>} ></Route>
    <Route path="counter-redux" element={<CounterRedux/>} ></Route>
</Routes>)
}