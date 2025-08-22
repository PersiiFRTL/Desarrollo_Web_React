import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 const Allclick = () => good + neutral + bad
 if(Allclick()===0){return <p>No hay opiniones todavia!</p>}
 const Average = () =>Allclick()===0? 0 : (good - bad ) / Allclick()
 const pors = () =>Allclick()===0? 0 : good*100 / Allclick()
  return (
    <div>
      <h1>Danos tu feedback! </h1>
      <button onClick={()=> setGood(good+1)}>Bien </button>
      <button onClick={()=> setNeutral(neutral+1)}>Meh </button>
      <button onClick={()=> setBad(bad+1)}>Malo </button>
      <h2>Estadisticas: </h2>
      <p>Bueno: {good}</p>
      <p>Meh: {neutral}</p>
      <p>Malo: {bad}</p>
      <p>todos: {Allclick()}</p>
      <p>Average: {Average ()}</p>
      <p>positivos: {pors()}</p>
    </div>
  )
}

export default App