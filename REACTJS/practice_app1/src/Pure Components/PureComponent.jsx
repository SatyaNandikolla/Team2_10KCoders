import { Component } from "react";

//rcc
export class PureComponent extends Component{
    constructor(props){
        super(props)
        console.log("I Am From Pure Component")
        
        // this.state={}
    }
    render(){
        return(
            <div>
                <h2>{this.props.message}</h2>
                
            </div>
        )
    }
}