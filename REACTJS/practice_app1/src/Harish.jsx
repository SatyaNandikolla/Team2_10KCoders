import { Component } from "react";
import { Greetings } from "./Greetings";

export class Harish extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to Harish Component",
            welcMessage:"Welcome to My Component"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({
                    message:"Hello I Am Satya Component"
                })}}>Change Message</button>
                {/* <h2>{this.state.message}</h2> */}
                <Greetings 
                msg={this.state.message}
                welc={this.state.welcMessage}
                />
            </div>
        )
    }
}