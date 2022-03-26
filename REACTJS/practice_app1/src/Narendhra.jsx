import React,{ Component } from "react"

export class Narendhra extends Component{
    // var message="Hello from the component"
    // document.querySelector("h2").innerHTML=message 
    constructor(){
        this.state={}
    }
    render(){
        return(
            <h2></h2>
        )
    }
}
export  class Satya extends Component{
    render(){
        return(
            <h2>Hello I Am From  Satya Component</h2>
        )
    }
}
export default class Divya extends Component{
    render(){
        return(
            <h2>Hello I Am From Divyas component</h2>
        )
    }
}