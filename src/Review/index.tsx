import React from 'react'

function Review({submit,value}: any) {
  return (
    <div>
      <p>firstName : {value.firstName} </p>
      <p>LastName: </p>
      <p>Email: </p>
      <p>Contact: </p>
      <p>Address: </p>
      <p>CardName: </p>
      <p>CardNumber: </p>
      
      <button onClick={()=>submit(1)}>Back</button>
      <button>Submit</button>
    </div>
  )
}

export default Review
