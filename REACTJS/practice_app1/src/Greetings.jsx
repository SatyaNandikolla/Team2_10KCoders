import { Component } from "react";

export class Greetings extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return(
            <div>
                <h2 style={{color:"red"}}>{this.props.Message}</h2>
                <h2>{this.props.welcomeMsg}</h2>
            </div>
        )
    }

}