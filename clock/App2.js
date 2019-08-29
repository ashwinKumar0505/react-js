import React,{Component} from 'react';
import Clock from "./Clock"
import Header from "./Header"
import "./App2.css"
class App2 extends Component{

  render(){
    return(
      <div>
      <Header />
      <Clock />
      </div>
    )
  }


}

export default App2;