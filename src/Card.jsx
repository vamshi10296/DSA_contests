import React from 'react'

function Card(props) {
    const { myage, fname } = props;
    console.log(myage);
    console.log(fname);
    
  return (
    <div>
        <h1>Card Component</h1>
        <p>Name: {fname}</p>
        <p>Age: {myage}</p>
    </div>
  )
}

export default Card