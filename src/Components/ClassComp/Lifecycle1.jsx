import React,{Component} from "react";
import Lifecycle from "./Lifecycle";

export default class Lifecycle1 extends Component{
    state={
        cycle:true
    }
    componentWillUnmount(){
       console.log('destroy');
        this.handle()
    //   console.log('destroy');
    }
    handle=()=>{
      this.setState({cycle:false})
    }
    render(){
        return(
            <>
            
            <h1>home</h1>
          {this.state.cycle?<Lifecycle/>:null}
            <button onClick={this.handle}>destroy</button>
            </>
        )
    }
}