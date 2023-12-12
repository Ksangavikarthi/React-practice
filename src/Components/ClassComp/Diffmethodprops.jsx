import React, { Component } from "react";

export default class Diffmethodprops extends Component{
    constructor(props){
        super(props)
    this.state={
        count:0,
        moviename:'leo'
    }
//in normal evevthandle function write it,then we bind in this constructor for first method----this.handleclick=this.handleclick.bind(this)
//button method first only use arrow fun, but we bind all method only use normal function. 
}
handleclick=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        const{movie}=this.props
        return(
            <div>
      <h1>{movie}-{this.state.count}</h1>
      <button onClick={this.handleclick}>click</button>
      {/* <button onClick={this.handleclick.bind(this)}>click</button> */}
      {/* <button onClick={()=>this.handleclick()}>click</button> */}
            </div>
        )
    }
}