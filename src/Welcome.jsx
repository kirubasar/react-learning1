import React from 'react'
// functional component and resuable component eg:
const Welcome =({item, onPress, id}) =>{
  return (
    <div> 
    {/* not using ul here because ul is used in App.jsx that is correct way*/}
        <h3 onClick={onPress}> {id}. Welcome to {item}  </h3>
        
    </div>
  )
}

export default Welcome