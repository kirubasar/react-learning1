import React from 'react'
// functional component and resuable component eg:
const Welcome =({item, id}) =>{
  return (
    <div> 
    {/* not using ul here because ul is used in App.jsx that is correct way*/}
    <h3>The order{id} of crop based on Ratings</h3>
    <li> Rating:{id}-Name: {item}</li>
        
    </div>
  )
}

export default Welcome