import React from 'react';

function Header(props){ 
    console.log("hello");
    return (  
      <div className="header">
        <img src="./clock.png" alt="clock" className="clock-image"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>React Clock</h1>
      </div>
    );
  }
 
export default Header;