import React from 'react';

function textField(props){
   return(
     <div>
    <input type="text" className="text-field" placeholder="What Needs TO BE Done" onChange={props.change} onKeyPress={props.add}></input>
    </div>
   )
}
export default textField;
