import { useState } from 'react'

function Counter() {
        const [user, setUser] = useState({name: "White", age:16})
        //const [count, setCount] = useState(0);

        // ...prevUser helps to keep everthing the same until change
        return(
    <>
        <div>

            <h1 className="counter">Counter: {user.age} {user.name}</h1>
            <button className="increment" 
            onClick={() =>{
                // 1. Use a callback within setState to access the previous value
                // 2. Spread all the properties of prev object into the new object
                // 3. Change tht property that you want to change.
                setUser((prevUser) => ({
                    ...prevUser,
                    age: prevUser.age + 1
                }))
            }}>Increment</button>
            
            <button className="decrement" onClick={() =>{
                setUser((prevUser) => ({
                    ...prevUser,
                    age: prevUser.age - 1
                }))
            }}>Decrement</button>
            
            <button className="reset" onClick={() =>{
                setUser(0)
            }}>Reset</button>
        </div>
        {/* <div>

            <h1 className="counter">Counter: {count}</h1>
            <button className="increment" onClick={() =>{
                setCount(count + 1)
            }}>Increment</button>

            <button className="decrement" onClick={() => {
                setCount((prevCount) => prevCount - 1);
                setCount((prevCount) => prevCount - 1);
            }}>Decrement</button>

            <button className="reset" onClick={() =>{
                setCount(0)
            }}>Reset</button>
        </div> */}
    </>
    /**   BETTER WAY IS THE DECREMENT ONE   
     * 
     * Better to use Callback function () => {}
     *  button onClick={() => {
     *      setCount((prevCount) => {
     *      prevCount - 1
     *      })
     * }}>
     * 
     */
    )
}

export default Counter