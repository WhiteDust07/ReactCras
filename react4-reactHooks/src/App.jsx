
import Popup1 from '../../react5-routing/src/components/Popup1.jsx'
import ReactHooks from './components/ReactHooks.jsx'
import Counter from './components/Counter.jsx'
import './App.css'
import { useState, useEffect} from 'react'

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  // let popupOpen = false
  function tooglePopup() {
    setPopupOpen(true)
    console.log("Yo")
  }
  function popupOff(){
    setPopupOpen(false)
  }
  
  useEffect(() =>{
    console.log("ONly Runs when components mounted")
  }, [])

  useEffect(() =>{
    console.log("runs when component mounts and ${popupOpen} changes it is value")
  }, [popupOpen]) // can add many dependencies into array

  useEffect(() =>{
    console.log("without array gonna run on every rendering")
  },) // Runs on Every Rendering when anthing changes


  // useEffect() is used when as soon as we open the website usually
  // useEffect takes to parametrs 1. callback function()=>{}
    // and 2. dependencies [] .array
  return (
    <>
      
      <Counter/>
      <div>
        <input type="text" />
        <button onClick={(e) => {
          
        }}>
        Add To do
        </button>
      </div>
      <ReactHooks tooglePopup = {tooglePopup} popupOff={popupOff}/>
      <ReactHooks tooglePopup ={tooglePopup} popupOff={popupOff}/>
      <Popup1/>
      {popupOpen ? <Popup1 title="Are YOu Sure"/> : null}
    </>
  )
}

//          useState usage
// const [state, setState] = useState(false)

// state => state variable that stores 
// the value we are going to use
// as a let state = 

// setState =>  is changes the value of a state variable
// useState(false) => is default value


// [state is my variable as in js  , setstate is how I change it is value ]
// [useState(false)] is where are write default value of my variable
export default App
