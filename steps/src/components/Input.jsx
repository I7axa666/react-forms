import Results from "./Results";
import { useState } from 'react';

export default function Input () {
  const [defaultValue, setdefaultValue] = useState({
    inputDate: "ДД.ММ.ГГГГ",
    inputDistance: 0
  })
  
  
  const [results, setResults] = useState([])
  
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    formJson.inputDate = new Date(formJson.inputDate)
    const dateInResults = results.findIndex(item => +item.inputDate === +formJson.inputDate)
    let newRes = []
    if (dateInResults !== -1) {
      const newDistance = Number(results[dateInResults].inputDistance) + Number(formJson.inputDistance)
      formJson.inputDistance = newDistance
      newRes = [...results]
      newRes.splice(dateInResults, 1)
      newRes.push(formJson)
      
    } else {
      newRes = [...results]
      newRes.push(formJson)

    }

    newRes.sort((a, b) => a.inputDate - b.inputDate) 

    setResults(newRes)

    setdefaultValue({...defaultValue, inputDate: "ДД.ММ.ГГГГ",
    inputDistance: 0})
  }

  const onChange = (event) => {
    const {name, value} = event.target
    setdefaultValue({...defaultValue, 
      [name]: value})   
  }

  const changeInputValue = (newDate, newDistance) => {
    setdefaultValue({...defaultValue, 
      inputDate: newDate,
      inputDistance: newDistance
    })

  }

  return (
    <>
      <form method="post" onSubmit={onSubmit}>
        <div className="date">
          <p>Дата (ДД.ММ.ГГ)</p>
          <input name="inputDate" type="date" value={defaultValue.inputDate} onChange={onChange}></input>
        </div>
        <div className="distance">
          <p>Пойдено км</p>
          <input name="inputDistance" type="number" value={defaultValue.inputDistance} onChange={onChange}></input>
        </div>
        <button className="sendBtn" type="onSubmit">OK</button>
      </form>
      <Results resultData={results} changeInputValue={changeInputValue} setRes={setResults}/>
    </>
  )
}