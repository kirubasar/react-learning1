import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component eg

const App = () => {
  const crops = [
    { name: "Corn", harvest: "90 days" },
    { name: "Wheat", harvest: "120 days" },
    { name: "Rice", harvest: "150 days" },
    { name: "Millets", harvest: "80 days" }
  ];
  
  
  
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      {/* passing full object-eg5*/}
      <ul>
      {crops.map((crop, index)=>(
        <Welcome key={index} data={crop} onPress={()=>{alert('you harvested ' + crop.name +"-" + crop.harvest)}}/>
      ))}
      </ul>
    </div>
  )
}

export default App
