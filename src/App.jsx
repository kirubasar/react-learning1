import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component aca

const App = () => {
  const course =["Java","Python","JavaScript","C++"];
  return (
    <div>
      <h2>Welcome kiruba's Academy</h2>
      {course.map((val,index)=>(
       <Welcome  key={index} item={val}/>))}
      
    </div>
  )
}

export default App
