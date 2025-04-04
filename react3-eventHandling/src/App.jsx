import Text from './components/Text.jsx'
import Event from './components/Event.jsx'
import Popup from './components/Popup.jsx'
import './App.css'

function App() {
  return (
    <>
      <div>
        <input type = "text" onChange={(event) =>{
          console.log(event.target.value)
        }}
        >

        </input>
        <button>Add TO DO</button>
      </div>
      <Event task="DO the work"/>
      <Text task="DO the work" />
      <Text task="DO the work" />
      <Text task="DO the work" />
      <Popup></Popup>
      <Event/>

    </>
  )
}
///     ONChange
// 



export default App
