const asd = ({good, neutral, bad}) =>{
 const Allclick = () => good + neutral + bad
 if(Allclick()===0){return <p>No hay opiniones todavia!</p>}
 const Average = () =>Allclick()===0? 0 : (good - bad ) / Allclick()
 const pors = () =>Allclick()===0? 0 : good*100 / Allclick()
}
 export default asd