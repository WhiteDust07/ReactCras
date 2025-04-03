import Todo from "./components/Todo.jsx"
import Props from "./components/Props.jsx"

import './App.css'

// Props allow us to Make our components dynamic

function App() {
  
  return (
    <>
    
      <Todo task="Learn React" 
      description = "Code along and learn"/>
      <Todo task="Finsh ASAP Frontend"/>
      <Todo task="Finsh a Project" 
      description = "Learn by building"/>
      <Props/>
    </>
    //CAn Create many props in one propery
  )
}




export default App
