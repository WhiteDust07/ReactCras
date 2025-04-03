import Counter from './components/Counter.jsx'
import Popup from './components/Popup.jsx';
import './App.css'

function App() {
  function handleClick(){
    console.log("Parrent notified")
  }
  return (
    <>
     <Counter/>
     <Popup handleClick={handleClick}/>
     
    </>
  )
}

export default App
