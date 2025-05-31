import React from 'react'

const Statics = ({good, neutral, bad}) => {
const getAll = () => good + neutral + bad
if (getAll() ===0){
    return <p>No hay retroalimentaciones todavia!</p>}
const getMedio = () =>getAll()===0? 0 : (good - bad ) / getAll ()
const getPositivo = () =>getAll()===0? 0 : good*100 / getAll()

const Staticticline = ({ text, value }) =>(
    <tr>
        <td>{text} </td>
        <td>{value}</td>
    </tr>
    )

    return(
    <div>
        <table>
            <tbody>
                <Staticticline text="Buenisimo" value={good}/>
                <Staticticline text="Meh" value= {neutral}/>
                <Staticticline text="Malardo" value={bad}/>
                <Staticticline text="Total" value={getAll()}/>
                <Staticticline text="Medio" value={getMedio()}/>
                <Staticticline text ="Positivo" value={getPositivo()} />
            </tbody>
        </table>
    </div>
    )
}

export default Statics