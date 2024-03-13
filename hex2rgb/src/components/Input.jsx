import { useState, useEffect } from 'react'
import convertToRGB from '../utilits/converter'

export default function Input() {
  const [color, setColor] = useState({
    rgb: '',
    color: 'rgb(255, 255, 255)'
  })

  const onChange = (event) => {
    const value = event.target.value
    
    if (value.length < 7) {
      setColor(color => ({...color, rgb: '', color: 'rgb(255, 255, 255)'}))
      return
    }

    const colorRGB = convertToRGB(value)

    if (colorRGB) {
    setColor(color => ({...color, rgb: colorRGB, color: colorRGB}))
    } else {
    setColor(color => ({...color, rgb: 'Ошибка!', color: 'rgb(255, 0, 0)'}))
    }
  } 
  
  useEffect(() => {
    document.body.style.backgroundColor = color.color
  })

  return (
    <div className='container'>
      <input type="text" placeholder='Введите HEX' onChange={onChange}/>
      <div className='validator'>
        <p>{color.rgb}</p>
      </div>
    </div>
  )
}