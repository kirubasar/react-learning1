import React from 'react'
// functional component and resuable component eg:
const Welcome =({data}) =>{
  return (
    /* when we use li we write <> without div */
    <> 
    {/* not using ul here because ul is used in App.jsx that is correct way*/}
        <li>{data.name} - Harvested: {data.harvest}</li>
    </>
  )
}

export default Welcome