
import { useState } from "react";
const Counter = () =>{

const [count, setCount] = useState (0);
const increment = () => setCount(count +1);
const Decrement = () => {
    
    if(count > 0) setCount(count -1);
}



    return(
        <div>
            <h2>count{count}</h2>
            <button onClick={Decrement}disabled={count === 0}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}


export default Counter;