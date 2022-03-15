//rcc
import React, { Component } from "react";
import { HOComp } from "./HOComp";
class HoverCounter extends Component {
    //rcon
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // handleCount=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render() {
        let { handleCount ,count} = this.props;

        return (
            <div>
                <h1 onMouseOver={handleCount}>You Hovered{count} times</h1>

            </div>
        )
    }
}
export default HOComp(HoverCounter);