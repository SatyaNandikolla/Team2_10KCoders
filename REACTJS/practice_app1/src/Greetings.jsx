import { Component } from "react";

export default class Greetings extends Component{
    constructor(props){
        super(props)
        this.state={}
        console.log(props.message)
    }
    render(){
        return(
            <div>
            <h2>{this.props.message}</h2>
            <h2>{this.props.welcMessage}</h2>
            </div>
        )
    }
} 