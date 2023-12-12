import React, { Component } from "react";

export default class Datafetch extends Component{

    state={
        data:[]
    }
    // this is api call in class component,so we use fetch .then .catch-- suppose we have direct data we inset in state with array of object.
    //in fetch definitely convert json
    handle=()=> {
     let d=fetch('https://fakestoreapi.com/products')
     .then((res)=>{ 
        return res.json()
    })
     .then((product)=>{
        this.setState({data:product})
        console.log(product);
    })
     .catch((err)=>{
        console.log(err)
    })
     
    }
    render(){
        return(
            <div>
            <h1>products list</h1>
            {this.state.data.map((list,i)=>(
                <div key={i}>
                <h1>{list.title}</h1>
                <p>{list.description}</p>

                </div>
            ))}
         <button onClick={this.handle}>add product</button>
            </div>
        )
    }
}