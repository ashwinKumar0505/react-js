import React from 'react';

import delete1 from "./delete.jpg";

import edit from "./edit.png";
function Display(props){
  return(
    <div className="display">
      <img src={edit} alt="edit"></img>
      <h3>{props.array}</h3>
      <img src={delete1} alt="delete" onClick={()=>props.click(props.index)}></img>
    </div>
  )
}
export default Display;