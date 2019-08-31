import React, { Component } from 'react';
import Header from "./Header"
import Contents from "./Contents"
import "./app3.css"
class App3 extends Component {
  
  render() { 
    alert("this is a simple TODO APP")
    alert("Enter in text Field to add Your things to be done")
    alert("Click on the text to edit")
    alert("press the image to delete your todo...thank you")
    return (
      <div className="outer">
      <div className="container">
        <Header />
        <Contents />
      </div>
      </div>
      );
  }
}
 
export default App3;
