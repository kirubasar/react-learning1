import React from 'react'
// functional component and resuable component eg:
const Welcome =({data, onPress}) =>{
  return (
    <div className="card"> 
    <h3 onClick={onPress} style={{cursor:"pointer"}}>{data.name}</h3>
    
    </div>
  )
}

export default Welcome