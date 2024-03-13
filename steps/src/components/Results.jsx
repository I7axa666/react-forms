import dateConverter from "../utilits/dateConverter";

export default function Results ({resultData, changeInputValue, setRes}) {
  
  const del = (event) => {
    event.preventDefault()
    const delitedDateIndex = event.target.closest('li').id
    resultData.splice(delitedDateIndex, 1)
    setRes([...resultData])
    // event.target.closest('li').remove()
  }

  const edit = (event) => {
    event.preventDefault()
    const idDate = event.target.closest('li').id
    if (!idDate) {return}
    const editDate = dateConverter(resultData[idDate].inputDate)

    const editDistance = resultData[idDate].inputDistance
    changeInputValue(editDate, editDistance)
    resultData.splice(idDate, 1)
    setRes([...resultData])
  }
  
  return (
    <div className="results">
      <div className="head">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пойдено км</p>
        <p>Действия</p>
      </div>
      <div className='table'>
        <ul>
          {resultData.map((item, index) => (
            <li key={index} id={index}>
              <p>{dateConverter(item.inputDate, 1)}</p>
              <p>{item.inputDistance}</p>
              <div>
                <button className='editBtn' onClick={edit}>✎</button>
                <button className='deleteBtn' onClick={del}>✘</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  )
}