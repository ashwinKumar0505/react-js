import React from "react";

function Image(props){
  return (
    <div>
      <img src={props.image} width="300px" height="300px" alt="" onClick={props.click}/>
      <h3>Its {props.name}</h3>
      <h3>Email:{props.email}</h3>
      <h3>mobile:{props.mob}</h3>       
    </div>
  )
}




export default Image;