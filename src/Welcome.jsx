import React from 'react'
// functional component and resuable component eg:
const Welcome =({data, onPress}) =>{
  return (
    /* when we use li we write <> without div */
    <> 
    {/* not using ul here because ul is used in App.jsx that is correct way*/}
        <li onClick={onPress} style={{cursor:"pointer"}}> {data.name}</li>
    </>
  )
}

export default Welcome