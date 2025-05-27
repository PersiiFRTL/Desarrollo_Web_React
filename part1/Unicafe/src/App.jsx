import { useState } from 'react'
import Statics from './Components/Statics'

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

const getAll = () => good + neutral + bad
const getMedio = () =>getAll()===0? 0 : (good - bad ) / getAll ()
const getPositivo = () =>getAll()===0? 0 : good*100 / getAll()



  return (
    <div>
      <h1>Danos una retroalimentacion porfi</h1>
      <button onClick={Goodcl}> Bien </button>
      <button onClick={Neutralcl}> Meh </button>
      <button onClick={Badcl}> Malardo </button>  
      <Statics good= {good} neutral ={neutral} bad= {bad} />
    </div>
  )
}

export default App