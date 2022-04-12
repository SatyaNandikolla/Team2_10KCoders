import { Component } from "react";

export class Greetings extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return(
            <div>
                <h2 style={{color:"red"}}>hello I Am From Greetings Component</h2>
            </div>
        )
    }

}