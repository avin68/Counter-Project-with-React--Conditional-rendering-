import { useState } from "react"
import "./Counter.css"
import Button from "./Button"

function Counter(){
    let [count , setCount] = useState(0)

    function decreaseHandler(){
        setCount(count-1)
    }
    function increaseHandler(){
        setCount(count+1)
    }
    function resetHandler(){
        setCount(0)
    }


    return(
        <>
            <h2>{count}</h2>
            {count > 0 && <Button text="decrease" clickHandler={decreaseHandler} />}
            <Button text="increase" clickHandler={increaseHandler} />
            {count > 0 && <Button text="reset" clickHandler={resetHandler} />}
        </>
    )
}

export default Counter