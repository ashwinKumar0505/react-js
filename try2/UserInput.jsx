import React,{Component} from "react";

class UserInput extends Component{
  
  
  render(){
   return (
       <div>
      Input1: <input type="text" onChange={this.props.change}id="a"></input>
       <br></br>
       <br></br>
      Input2: <input type="text" onChange={this.props.change} id="b"></input>
       </div>
   )
  }
}
export default UserInput;