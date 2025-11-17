import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component eg

const App = () => {
  const crops = ["Corn", "Wheat", "Rice", "Millets"];
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      {/* Event handling using map and resuable component eg4*/}
      {crops.map((crop, index)=>(
        <Welcome key={index} item={crop} onPress={ ()=> alert(`You clicked on ${crop}`)} id={index+1}/>
      ))}
    </div>
  )
}

export default App
