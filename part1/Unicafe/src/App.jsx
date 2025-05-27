import { useState } from 'react'
import Statics from './Components/Statics'

const App = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Danos una retroalimentacion porfi</h1>
      <button onClick={() => setGood(good+1)} > Bien </button>
      <button onClick={() => setNeutral(neutral+1)}> Meh </button>
      <button onClick={() => setBad(bad+1)}> Malardo </button>  
      <Statics good= {good} neutral ={neutral} bad= {bad} />
    </div>
  )
}

export default App