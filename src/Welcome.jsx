import React from 'react'
// functional component and resuable component eg:
const Welcome =({data}) =>{
  return (
    <div className="card"> 
    <h3>{data.name} : <span style={{color:"rgba(193, 12, 238, 1)"}}>{data.category}</span></h3>
    </div>
  )
}

export default Welcome