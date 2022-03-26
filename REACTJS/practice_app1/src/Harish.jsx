import React from "react";
import { Component } from "react";
import { Greeetings } from "./Greetings";
export class Harish extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello I Am FRom Constructor Component",
            welMessage:"Hello I Am Welcome Message"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({message:"Hello Harish I Am Changed"})}}>Change Message</button>
            {/* <h2>{this.state.message}</h2> */}
            {/* <Greeetings msg={this.state.message} welc={this.state.welMessage}/> */}
            <Greeetings {...this.state}/>
            </div>
        )
    }
}