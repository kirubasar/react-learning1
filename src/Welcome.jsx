import React from 'react'
// functional component and resuable component eg:
const Welcome =({item, onPress, id}) =>{
  return (
    /* when we use li we write <> without div */
    <> 
    {/* not using ul here because ul is used in App.jsx that is correct way*/}
        <li>{id}:{item} <button onClick={()=>onPress(item)} style={{cursor: "pointer"}}>Select </button></li>
        
        
    </>
  )
}

export default Welcome