import { useState } from "react";

export const Counter = () => {
const [counter, setCounter] = useState(0)
const handleIncrementation = ()=> setCounter(counter+1)
const handleDecrementation = ()=> setCounter(counter-1)


return (
        <>
        <h3>COUNTER APPLICATION</h3>
        <h3>Counter:  {counter} </h3>
      <button onClick={handleIncrementation}  style={{marginRight:'1rem'}}>+</button> 
      <button onClick={handleDecrementation}>-</button>
        </>
        
        
    )
}