import React, { Component } from 'react';

class UserOutput2 extends Component {
  render() { 
    return (  
      <div>
        <h2>{this.props.name}----{this.props.stock ? "In Stock" : "Not In Stock"}</h2>
      </div>
    );
  }
}
 
export default UserOutput2;