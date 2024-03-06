import Results from "./Results";
import { useState } from 'react'

export default function Input ({...props}) {
  const {inputDate, inputDistance} = props.info
  
  const [results, setResults] = useState([])

  const onSubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setResults([...results, formJson])
  }

  return (
    <>
      <form method="post" onSubmit={onSubmite}>
        <div className="date">
          <p>Дата (ДД.ММ.ГГ)</p>
          <input name="inputDate" type="text" defaultValue={inputDate} ></input>
        </div>
        <div className="distance">
          <p>Пойдено км</p>
          <input name="inputDistance" type="text" defaultValue={inputDistance}></input>
        </div>
        <button className="sendBtn" type="submite">OK</button>
      </form>
      <Results resultData={results} changeInputValue={props.changeInputValue}/>
    </>
  )
}