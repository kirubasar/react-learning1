import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component eg

const App = () => {
  const crops = ["Corn", "Wheat", "Rice", "Millets"];
  // use handleClick function
  const handleClick=(val)=>{
    alert('you selected ' + val);
  }
  
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      {/* Event handling using map and resuable component eg4- passing crop as prop not item because it is inside map*/}
      <ul>
      {crops.map((crop, index)=>(
        <Welcome key={index} item={crop} onPress={handleClick} id={index+1}/>
      ))}
      </ul>
    </div>
  )
}

export default App
