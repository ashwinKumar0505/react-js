import React from 'react';

import delete1 from "./delete.jpg";

function Display(props){
  return(
    <div className="display">
      <h3 contentEditable="true" className="text" onKeyPress={props.keyPress}>{props.array}</h3>
      <img src={delete1} alt="delete" onClick={()=>props.click(props.index)}></img>
    </div>
  )
}
export default Display;
