import React from 'react'
import Welcome from './Welcome'
// functional component & resuable component 
const App = () => {
  return (
    <div>
      <h2>Welcome kiruba's Farm</h2>
      <Welcome name="Tomato"/>
      <Welcome name="Cabbage"/>
      <Welcome name="Carrot"/>
    </div>
  )
}

export default App
