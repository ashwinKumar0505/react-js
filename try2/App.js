import React,{Component} from 'react';
import UserInput from "./UserInput"
import UserOutput from "./userOutput"
import "./App.css"
import UserInput2 from "./UserInput2";
import UserOutput2 from "./UserOutput2";
class  App extends Component {
 state={
  prob1:{ a:0,
   b:0,
   sum:0,
   diff:0},
   prob2:[
     {name:"One-Plus" ,stock:true},
     {name:"Moto" ,stock:false},
     {name:"Redmi" ,stock:true},
     {name:"Lenovo" ,stock:false}     
   ],
   showAll:true
 }
  changeHandler=(event)=>{
        console.log("here")
        let new_a=this.state.prob1.a,new_b=this.state.prob1.b;
        if(event.target.id==="a"){
          new_a=event.target.value
        }
        else{
          new_b=event.target.value
        }
        let new_sum=0;
        let new_diff=0;
        new_sum=Number(new_a) + Number(new_b);
        new_diff=Number(new_a) - Number(new_b);
        console.log(new_a+" "+new_b+" "+new_sum+" "+new_diff) 
        this.setState({
          prob1:{  a:new_a,
            b:new_b,
            sum:new_sum,
            diff:new_diff}
        }
        )
   } 

   showInStock=(event)=>{
           if(event.target.checked){
             this.setState(
               {showAll:false}
             )
           }
           else{
             this.setState(
               {showAll:true}
             )
           }
   }
   
 
  render(){
     let products=[];
     const styles={
       color:"blue"
     }

     if(this.state.showAll){
        products=this.state.prob2.map((product)=>{
                   styles.color="red" 
          return (
          <UserOutput2 name={product.name} stock={product.stock} />)
        });
 
     }
     else{
         products=this.state.prob2.map((product)=>{
     return (
      product.stock ?
     <UserOutput2 name={product.name} stock={product.stock} />
     : null
     )
     })
     }
    return (
      <div className="container">
        <div>
        <h1 style={styles}>Type to display your name</h1>
        <UserInput change={this.changeHandler}/>
        <UserOutput sum={this.state.prob1.sum} diff={this.state.prob1.diff} />
        </div>
        <div>
        <UserInput2 show={this.showInStock} />
        {products}
        </div>
      </div>
    )
  }
}

export default App;
