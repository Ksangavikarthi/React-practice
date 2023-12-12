import React, { Component } from "react";
export default class Birthday extends Component{
    state={
        list:[{
            id: 1,
            name: 'Bertie Yates',
            age: 29,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
          },
          {
            id: 2,
            name: 'Hester Hogan',
            age: 32,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
          },
          {
            id: 3,
            name: 'Larry Little',
            age: 36,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          },
          {
            id: 4,
            name: 'Sean Walsh',
            age: 34,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          },
          {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          },]
    }
    render(){
        return(
            <>
            <h1>{this.state.list.length} birthday</h1>
            {this.state.list.map((data,i)=>(
                <div key={i}>
                 <p>{data.name}</p>
                 <img src={data.image} alt="img"  width={100} height={100}/>

                </div>
            ))}
            </>
        )
    }
}