import React, { Component } from "react";
 export default class Lifecycle extends Component{
     state={
        count:0
     }
componentDidMount(){ // lifecycle method only use function not a tag ,if suppose fetch data in compdidmount(fn call written).when the page is open is there,,, but show in UI we use tags of in return(it means the tags mainly use fetch data map on fn create in tags---{important state and setstate and props only when UI show use it }) 
// setTimeout(() => {
//     this.setState({count:this.state.count+1})
// },1000);
this.setState({count:this.state.count+1})
console.log('didmount');
}
// shouldComponentUpdate(){
//     return true
// }
// componentDidUpdate(){
//     this.handle()
// }

handle=()=>{
    this.setState({count:this.state.count+2})
}
render(){
        this.state.count
        return(
            <>
            <h1>welcome</h1>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.handle}>click</button>
            </>
        )
    }
 }