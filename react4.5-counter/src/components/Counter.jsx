import { useState } from "react"

function Counter() {
    const [array, setArray] = useState([]) 
    return(
    <>
    <div>
        <h1> 
            {array.toString()}
        </h1>
        <button onClick={() => {
            setArray((prevArray) => 
                [...prevArray, "+1"])
        }}>
            Increment</button>
        <button onClick={() => {
            setArray((prevArray) => 
                [...prevArray, "-1"])
        }}>
            Decrement</button>
        <button >
            Reset</button>
    </div> 
    </>   
    )
}

/*  UseState 
    strings("na")
    setString(PrevString => prevString + "Musa")

    setNumbers(10)
    serNumber(prevNumber => prevNumber + 2)

    objects 
        setObject(newObject)
        setObject(prevObject => ({prevObject, age:prevObject.age + 1)}

    
    Arrays
        setArray(NewArray)
        setArray(prevArray => ([...prevArray, +1 ]))


*/


export default Counter