import React,{Component} from 'react';
class Clock extends Component{
   state={
    date:new Date().toDateString(),
    time:new Date().toLocaleTimeString()
  }
  timeClock=()=>{
       this.setState(
         {
           time:new Date().toLocaleTimeString()}
       )
  }

 render() {
     setInterval(this.timeClock,1000)
    return ( 
      <div className="content">        
        <div className="round-clock">
          <h2>{this.state.time}</h2>
          <p>{this.state.date}</p>
        </div>
      </div>
     );
 }
}
export default Clock;