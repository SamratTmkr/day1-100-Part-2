import React, { useState } from 'react'

const Hi = () => {
  const [count, setCount] = useState(0);

  const increment = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount - 1);
  };

  const reset = (event) => {
    event.preventDefault();
    setCount(0);
  };
 
  return (
    <>
    
    
    <div className="counter-container w-1/2 mx-auto bg-amber-400">
      <div className="text-center p-5">
      <button className='btn btn-accent text-3xl p-10'>Count: {count}</button>
   
   <div className="counter flex justify-evenly my-10">
     <button onClick={increment} className="increment btn btn-primary">
       Increment
     </button>
     <button onClick={decrement} className="decrement btn btn-secondary">
       Decrement
     </button>
   </div>
   <button onClick={reset} className="reset btn btn-info my-5">
     Reset
   </button>
      </div>
    </div>
    </>





  )
}

export default Hi