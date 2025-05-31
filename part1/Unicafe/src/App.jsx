import { useState } from 'react'
import Statics from './Components/Statics'

const App = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const Button = ({click,text}) => (<button onClick={click}>{text}</button>)

  return (
    <div>
      <h1>Danos una retroalimentacion porfi</h1>
      <Button click={() => setGood(good+1)} text="Bien" />
      <Button click={() => setNeutral(neutral+1)} text="Meh" />
      <Button click={() => setBad(bad+1)} text="Malardo" />  
      <Statics good= {good} neutral ={neutral} bad= {bad} />
    </div>
  )
}

export default App