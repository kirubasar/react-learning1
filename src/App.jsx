import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component eg

const App = () => {
  // using object array 
  const crops = [
    { id: 1, name: "Corn" },
    { id: 2, name: "Wheat" },
    { id: 3, name: "Rice" },
    { id: 4, name: "Millets" }
  ];
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      {/* using ul here is correct way and using map to import crops eg3 */}
    <ul>
      {crops.map((crop)=>(
       <Welcome  key={crop.id} id ={crop.id} item={crop.name}/>))}
    </ul>
    </div>
  )
}

export default App
