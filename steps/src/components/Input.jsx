import Results from "./Results";
import { useState } from 'react'

export default function Input ({...props}) {
  const {inputDate, inputDistance} = props
  const [results, setResults] = useState([])
  const [autofill, setAutofill] = useState({
    inputDate: inputDate,
    inputDistance: inputDistance
  })


  const onSubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const changeInputValue = (newDate, newDistance) => {
      console.log(newDistance)
       setAutofill(autofill => ({...autofill, inputDate: newDate, inputDistance: newDistance}))
    } 
    formJson.myFunc = changeInputValue
    setResults([...results, formJson])
  }

  return (
    <>
      <form method="post" onSubmit={onSubmite}>
        <div className="date">
          <p>Дата (ДД.ММ.ГГ)</p>
          <input name="inputDate" type="text" defaultValue={autofill.inputDate}></input>
        </div>
        <div className="distance">
          <p>Пойдено км</p>
          <input name="inputDistance" type="text" defaultValue={autofill.inputDistance}></input>
        </div>
        <button className="sendBtn" type="submite">OK</button>
      </form>
      <Results resultData={results}/>
    </>
  )
}