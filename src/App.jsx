import { useState } from 'react'

import './App.css'

function App() {
const [height, setHeight]=useState("");
const [weight, setWeight]=useState("");
const [bmi, setBmi]=useState(null);
const [bmistatus, setBmiStatus]= useState("");
const [error, setError]=useState("");
const  calculateBmi = ()=>{
const isValidHeight=/^\d+$/.test(height)
const isValidWeight=/^\d+$/.test(weight)

  if(isValidHeight && isValidWeight){
 const heightInmeter = height/100;
 const bmiValue = weight /(heightInmeter*heightInmeter)
 setBmi(bmiValue.toFixed(2))
 if(bmiValue<18.5){
  setBmiStatus("Underweight");

  <img src="https://thumbs.dreamstime.com/b/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.jpg"  style={{ width: '400px', }}/>

 }else if(bmiValue>=18.5 && bmiValue<24.9){
  setBmiStatus("Normal weight");
 }else if(bmiValue>25 && bmiValue<29.9){
  setBmiStatus("Overrweight");
 }
else{
  setBmiStatus("obese");
 }
 setError("")

  } else{
      setBmi(null)
      setBmiStatus("")
      setError("please enter numeric values for height and weight.")

      
    }
 
}
const clearAll = () => {
  setHeight("")
  setWeight("")
  setBmi("")
  setBmiStatus("")
 }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box">

        </div>
        <div className="data">
           <h1>Bmi Calculator</h1>
           <p className='error'>{error }</p>

           <div className="inpute-container">
            <label  htmlFor='height'>Height (cm)</label>
            <input type='text' value={height} id='height' onChange={(e)=>setHeight(e.target.value)}/>
            </div> 
            <div className="inpute-container">
            <label  htmlFor='weight'>Weight (kg)</label>
            <input type='text' value={weight} id='weight'  onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            {bmi !==null && (
              <div className="result">
              <p>your bmi is :{bmi}</p>
              <p>status:{bmistatus} </p>
            </div>
            ) }
          </div>
      </div>
    </>
  )
}

export default App
