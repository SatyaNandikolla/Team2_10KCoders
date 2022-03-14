//rcc
import React, { Component } from "react";
export default class HoverCounter extends Component{
    //rcon
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    handleCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <h1 onMouseOver={this.handleCount}>You Hovered{this.state.count} times</h1>

            </div>
        )
    }
}