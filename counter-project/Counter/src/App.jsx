import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counterValue = 0;

  const  addValue = ()=>{
    //counter = counter + 1;
    if(counter<20){
      setCounter(counter+1)
    }
    
  }
  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>Harsh Sahu</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button

      onClick={addValue}
      
      >Add Value</button>
      <br/>
      <button 
      onClick={removeValue}
      >Remove Value: {counter}</button>
      <p>footer: {counter} </p>


    </>
  )
}

export default App
