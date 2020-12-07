import React from "react";

function Review({ submit, value }: any) {
  return (
    <div>
      <p>FirstName : {value.firstName} </p>
      <p>LastName: {value.lastName} </p>
      <p>Email: {value.email}</p>
      <p>Contact: {value.contact}</p>
      <p>Address: {value.Address}</p>
      <p>CardName: {value.cardName}</p>
      <p>CardNumber: {value.cardNumber}</p>

      <button onClick={() => submit(1)}>Back</button>
      <button onClick={() => alert("Thanks you for Buying")}>Submit</button>
    </div>
  );
}

export default Review;
