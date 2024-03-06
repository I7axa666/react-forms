export default function Results ({resultData, changeInputValue}) {
  // console.log(changeInputValue)
  const del = (event) => {
    event.preventDefault()
    event.target.closest('li').remove()
  }

  const edit = (event) => {
    event.preventDefault()
    const idDate = event.target.closest('li').id
    const editDate = resultData[idDate].inputDate
    const editDistance = resultData[idDate].inputDistance
    changeInputValue(editDate, editDistance)
    // event.target.closest('li').remove()
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
              <p>{item.inputDate}</p>
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