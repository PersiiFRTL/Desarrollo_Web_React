import React from 'react'

const Statics = ({good, neutral, bad}) => {
const getAll = () => good + neutral + bad
if (getAll() ===0){
    return <p>No hay retroalimentaciones todavia!</p>}
const getMedio = () =>getAll()===0? 0 : (good - bad ) / getAll ()
const getPositivo = () =>getAll()===0? 0 : good*100 / getAll()

    return(
    <div>
    <h1>Estadisticas:</h1>
    <p>Buenisimo: {good}</p>
    <p>Meh: {neutral}</p>
    <p>Malardo: {bad}</p>
    <p>Total : {getAll()}</p>
    <p>Medio: {getMedio()}</p>
    <p>Positivo: {getPositivo()} %</p>
    </div>
    )
}

export default Statics