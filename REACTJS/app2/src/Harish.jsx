import React, { Component } from "react";
import Greetings from "./Greetings";
export class Harish extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome To Harish Component",
            welcomeMsg: "Hello 10K Team...Welcome to ReactJs Training"
        }
    }
    render() {
        return <div>
            <button onClick={() => { this.setState({ message: "Hello Harish" }) }}>Change Message</button>
            {/* <h3>{this.state.message}</h3> */}
            {/* <Greetings 
            msg={this.state.message}
            welc={this.state.welcomeMsg} /> */}

            <Greetings {...this.state}/>
        </div>
    }

}