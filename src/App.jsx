import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component 

const App = () => {
  const names =['Corn', 'Wheat', 'Rice', 'Millets'];
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      <ul>
      {names.map((val,index)=>(
       <Welcome  key={index} item={val}/>))}
      </ul>
    </div>
  )
}

export default App
