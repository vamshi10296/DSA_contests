import {useState} from 'react'
export default function Counter() {
    const [count, setCount] = useState(0);
}

 

function handleClick() {
    console.log('vamshi');
    setCount(count + 1);
    console.log(count);


  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>
        Click me
      </button>
    </div>
  )
}

 