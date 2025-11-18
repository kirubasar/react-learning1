import React from 'react'
import Welcome from './Welcome'
import './App.css'
// functional component & resuable component eg

const App = () => {
  const crops = [
    { name: "Corn", category: "Grain" },
    { name: "Tomato", category: "Vegetable" },
    { name: "Mango", category: "Fruit" },
  ];
  
  
  
  return (
    <div className="cards">
      {/* Rendering cards using .map()-eg6*/}
      
      {crops.map((crop, index)=>(
        <Welcome key={index} data={crop}/>
      ))}
      
    </div>
  )
}

export default App
