import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black pd-3 rounded-xl'>Hello world</h1>
      <Card username="harsh"/>
      <Card username="megha"/>

    </>
  )
}

export default App
