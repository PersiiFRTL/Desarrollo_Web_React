import { useState } from 'react'

const App = () => {
const anecdotes = [
  'Wachín, cuchame... si te duele, hacelo más seguido.',
  'Meter más gente en un proyecto atrasado es como echarle nafta al fuego. Spoiler: no ayuda.',
  'El 90% del código se hace en el 10% del tiempo. El otro 10%... te arruina la vida durante meses.',
  'Cualquiera puede escribir código que entienda la compu. Los buenos hacen que hasta tu abuela lo lea sin llorar.',
  'Optimizar antes de tiempo es como ponerle nitro al auto... cuando todavía estás armando las ruedas.',
  'Debuggear es el doble de difícil que codear. Si lo escribiste muy vivo, suerte pa\' entender qué hiciste.',
  'Programar sin usar console.log es como ser médico y decir: “nah, los rayos X son de cheto”.',
  'La única forma de ir rápido es... no mandarte cagadas, maestro.'
]

  const [selected, setSelected] = useState(0)

  const Clickardo = () => {
    const Nrandom = Math.floor(Math.random() * anecdotes.length)
    setSelected(Nrandom)
  }

  return (
    <div>
      <h1>Anecdotin del día</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={Clickardo}>Mostrar otra anécdota</button>
    </div>
  )
}

export default App