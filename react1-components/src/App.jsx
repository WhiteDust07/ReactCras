import Todo from './components/Todo.jsx'
import Todo2 from './components/Todo2.jsx'
import Popup from './components/Popup.jsx'
import './App.css'



// we use className = "" instead of class = "" attribute
function App() {

  return (
    <>
      <Todo/>
      <Todo2/>
      <Popup task="You want to stop"/>
    </>
  )
}

export default App
