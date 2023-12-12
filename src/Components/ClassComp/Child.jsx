import React,{Component} from "react";

export default class Child extends Component{
    state={name:'kavi'}
  render(){
        return(
            <div>
          <button onClick={()=>this.props.change}>click</button>
           </div>
        )
    }
}
//in this value means state value not given to parent tag because only responsible fir inheritance(parent to child)