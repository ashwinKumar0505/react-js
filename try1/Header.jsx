import React, {Component} from "react";

class Header extends Component{
constructor(){
  super();
  this.state={
    count:0
  }
  this.handleClick=this.handleClick.bind(this);
}

handleClick(){
  this.setState(prevState=>{
    console.log("reach")
    return {
      count:prevState.count +  1
    }
  })
}

  render(){
    return(
      <div className="header">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Press here</button>
      </div>
    )
  }
}

export default Header;