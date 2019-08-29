import React,{Component} from "react"
import Radium from "radium"

class UserOutput extends Component{


  render(){
    const styles={
      ":hover":{
        color:"white"
      }
    }
    return(
      <div>
      <h1 style={styles}>The sum is <span className="user-name">{this.props.sum}</span></h1>
      <h1>The diff id <span className="user-name">{this.props.diff}</span></h1>
      </div>
    )
  }
}

export default Radium(UserOutput);