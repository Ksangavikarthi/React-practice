import React, { Component } from "react";

class Intro extends Component{
  state={
    name:'kavi'
} 
render(){
    const{title}=this.props
        return(
            <div>
                <h1>hi sangavi{this.state.name}</h1>
                <h1>{title}</h1>
            </div>
        )
    }
}
export default Intro