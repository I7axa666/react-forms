import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Results from './components/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input inputDate="ДД.ММ.ГГГГ" inputDistance="0" />
    </>
  )
}

export default App
