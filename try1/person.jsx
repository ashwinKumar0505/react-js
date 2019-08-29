import React from "react"

function Person( props ){
   return (
     <div>
       <h2>My Name is {props.name}</h2>
       <h2>My age is {props.age}</h2>
       <input type="text" onChange={props.changed} value={props.name}/>
       <h2>{props.children}</h2>
     </div>
   )
}
export default Person;