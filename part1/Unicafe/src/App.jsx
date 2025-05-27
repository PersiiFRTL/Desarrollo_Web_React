import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const Goodcl = () => {
  setGood(good +1)
}

const Neutralcl = () => {
  setNeutral(neutral +1)
}

const Badcl = () => {
  setBad(bad +1)
}


  return (
    <div>
      <h1>Danos una retroalimentacion porfi</h1>
      <button onClick={Goodcl}> Bien </button>
      <button onClick={Neutralcl}> Meh </button>
      <button onClick={Badcl}> Malardo </button>
      <h1>Estadisticas:</h1>
      <p>Buenisimo: {good}</p>
      <p>Meh: {neutral}</p>
      <p>Malardo: {bad}</p>
      <p>Total : {good + neutral + bad}</p>
      <p>Medio: {(good - bad) / (good + neutral + bad)}</p>
      <p>Positivo: {(good / (good + neutral + bad)) * 100 }</p>
    </div>
  )
}

export default App