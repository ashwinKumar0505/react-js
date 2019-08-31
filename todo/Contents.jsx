import React, { Component } from 'react';
import TextField from "./TextField";
import Display from "./Display"
class Contents extends Component {
   state={
     inputText:"",
     inputArray:[]
   }

    textHandler=(event)=>{
         this.setState(
            {
              inputText:event.target.value
            }
          )
    }
    addToArray=(event)=>{
      let joined = this.state.inputArray.concat(this.state.inputText);
      if(event.which === 13 || event.keyCode === 13){
        if(this.state.inputText===""){
          return
        }
        else{
         this.setState({
           inputText:"",
           inputArray : joined
         })
         event.target.value="";
        }
      }
    }
    deleteHandler=(key)=>{
          let removed=this.state.inputArray;
          removed.splice(key,1)
              this.setState({
                  inputArray:removed
              })
    }
    NextLineHandler=(event)=>{
      if(event.keyCode===13||event.which===13){
        event.preventDefault();
        event.target.blur();
      }
    }
  render() { 

    return ( 
      <div className="contents">
      <TextField change={this.textHandler} add={this.addToArray}/>
      {this.state.inputArray.map((input,index)=> <Display key={index} index={index} array={input} click={this.deleteHandler} keyPress={this.NextLineHandler}/>)}
      </div>
     );
  }
}
 
export default Contents;
