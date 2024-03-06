import { useState } from 'react'
import './App.css'
import Input from './components/Input'


function App() {
  const [info, setInfo] = useState({inputDate:"ДД.ММ.ГГГГ", inputDistance: "0"})
  
  function changeInputValue (newDate, newDistance) {
    setInfo({
      inputDate: newDate, inputDistance: newDistance
    })
    console.log(info)
  }
  return (
    <>
      <Input info={info} changeInputValue={changeInputValue}/>
    </>
  )
}

export default App
