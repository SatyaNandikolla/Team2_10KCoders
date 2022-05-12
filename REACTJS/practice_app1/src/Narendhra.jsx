// import { Component } from "react";

import { Component } from "react";

// export class Narendhra extends Component{
//     //javascript way of displaying the values from js to html
//     // var message="Hello I AM From Js Component"
//     // document.querySelector("h2").innerHTML=message
//     constructor(){
//         this.state={}
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Hello I Am From Narendhra Class Component</h2>
//             </div>
//         )
//     }

// }
// export class Kiran extends Component{
//     render(){
//         return <h2>Hello I Am From  Kiran Class Component</h2>
//     }
// }

export class Narendhra extends Component{
    // var message="Hello I Am From Narendhra Class Component",
    // document.querySelector("h2").innerHtml=message
    constructor(){
        super()
        this.state={}
    }
render(){
    return(
        <h2>Hello I Am From Narendhra Class Component</h2>
    )
}
}