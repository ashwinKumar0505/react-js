import React,{Component} from "react";
import Image from "./Image"
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import dog4 from "./dog4.jpg";
class Main extends Component{
  state={
    images:[
           {
            id:"1",
            image:{dog1},
            name:"dog1",
            email:"xxx@gmail.com",
            mob:"211341343"},
           { 

            id:"2",
            image:{dog2},
            name:"dog2",
            email:"yyy@gmail.com",
            mob:"2143441343"},
           {
            id: "3",
            image:{dog3},
            name:"dog3",
            email:"aaa@gmail.com",
            mob:"21134111" },
           {
            id:"4",
            image:{dog4},
            name:"dog4",
            email:"zzz@gmail.com",
            mob:"21456781343"
           }
         ]
      }
      deleteImageHandler=(index)=>{
          const prev=this.state;
          prev.images.splice(index,1);
          this.setState(prev);
 
      }
  render()
     {
      this.person=(
      this.state.images.map((images,index)=>{
        console.log(index);
        return (
          <Image 
             click={()=>this.deleteImageHandler(index)}
             image={images.image}
             name={images.name}
             email={images.email}
             mob={images.mob}
             key={images.id}
             />
        )
      })
      )
    return(
    <div className="contents">
      {this.person}
    </div>
    )
  }
}

export default Main;
