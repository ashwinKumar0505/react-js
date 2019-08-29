import React,{Component} from "react";
import Person from "./person"
class Footer extends Component{

  state={
    person1:{
        name:"ashwin!!!",
        age:30
    },
    person2:{
       name:"Kumar",
       age:20
    },
    display:false
  }
  Handler=()=>{
    this.setState(prevState=>{
      return({
         person1:{
          name:"ashwin",
          age: prevState.person1.age + 1        }
      })
      })
  }
  nameChangeHandler=(event)=>{
    console.log("hello");
    this.setState({
      person1:{
        name:event.target.value,
        age:30
      }
    })
  }
  person2Handler=()=>{
    this.setState(prevState=>{
      return {display:!prevState.display}
    })
  }
  render(){
    let person=null;
    if(this.state.display){
      person=(             
          <Person name={this.state.person2.name} age={this.state.person2.age} />
      ) 
    }
    return(
      <div className="footer">
      <button onClick={this.Handler}>Click me!!!!</button>
      <div className="contents">
      <Person 
      name = {this.state.person1.name} 
      age={this.state.person1.age}
      changed={this.nameChangeHandler}>
        This is person 1
        </Person>
        {person}
    </div>
     <button onClick={this.person2Handler}>Click here to see the second person</button>
      
      </div>
    )
  }
}
export default Footer;