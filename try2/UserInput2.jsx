import React, { Component } from 'react';

class UserInput2 extends Component {
  render() { 
    return (
      <div className="check-box-container">
      <input type="checkBox" className="check-box" onClick={this.props.show}></input>&nbsp;&nbsp;
      <h2>press here to how the products which are in stock</h2>
      </div>
      );
  }
}
 
export default UserInput2;