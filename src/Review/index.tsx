import React from "react";

function Review({ submit, value }: any) {
  return (
    <div className="form">
      <p style={{color:'white'}}>FirstName : {value.firstName} </p>
      <p style={{color:'white'}}>LastName: {value.lastName} </p>
      <p style={{color:'white'}}>Email: {value.email}</p>
      <p style={{color:'white'}}>Contact: {value.contact}</p>
      <p style={{color:'white'}}>Address: {value.Address}</p>
      <p style={{color:'white'}}>CardName: {value.cardName}</p>
      <p style={{color:'white'}}>CardNumber: {value.cardNumber}</p>

      <button className='btn' type="button" onClick={() => submit(1)}>Back</button>
      <button className='btn' type="submit" onClick={() => alert("Thanks you for Buying")}>Submit</button>
    </div>
  );
}

export default Review;
