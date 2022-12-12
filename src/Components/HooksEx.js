import React, { useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
  let inc=()=>{
      setCount(count+1)
}
let dec=()=>{
    setCount(count-1)
}
return (
  <div>
      <h1>{count}</h1>
      <button onClick={inc}>ClickMe</button>


      
      <button onClick={dec}>ClickMe</button>
    </div>
)
}
export default HooksEx