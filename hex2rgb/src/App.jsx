import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input color="red"/>
    </>
  )
}

export default App
