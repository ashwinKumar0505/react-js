import React, { Component } from 'react';
import Header from "./Header"
import Contents from "./Contents"
import "./app3.css"
class App3 extends Component {
  
  render() { 
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