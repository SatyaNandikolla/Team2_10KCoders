import { Component } from "react";
import { Greetings } from "./Greetings";

export class Harish extends Component{
    constructor(){
        super()
        this.state={
            Message:"Hello I Am From Harish Component",
            welcomeMsg:"Hello I Am From welcome component"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({Message:"Hello I Am Harish Component...but i Am Changed"})}}>Change Message</button>
                {/* <h2>{this.state.Message}</h2> */}
                <Greetings {...this.state}
                // msg={this.state.Message}
                // welc={this.state.welcomeMsg}
                />
            </div>
        )
    }
}