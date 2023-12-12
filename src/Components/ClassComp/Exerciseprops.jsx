import React,{Component} from "react";
import Child from "./Child";


export default class Exerciseprops extends Component{
   constructor(props){
   super(props)
   this.state={
    skill:'js'   }
}
handle=()=>{
        alert(`${this.state.skill}` )
    }
   render(){
        return(
            <div>
                <h1>our skills</h1>
                <h1>{this.state.skill}</h1>
              <Child change={this.handle}/>
          
            </div>
        )
    }
}