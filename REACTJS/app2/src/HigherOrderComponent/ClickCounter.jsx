//rcc
import React, { Component } from "react";
export default class ClickCounter extends Component{
    //rcon
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>You Clicked{this.state.count} times</h1>
            </div>
        )
    }
}