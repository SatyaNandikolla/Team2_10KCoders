//rafc
import React, { Component } from "react";
export const HOComp = (OriginalComponent) => {
    //Creating New Class Component which returns the Original Component
    //rcc
    class NewComponent extends Component {
        //rcon
        constructor() {
            super();
            this.state = {
                count: 0,
            }
        }
        handleCount = () => {
            this.setState({ count: this.state.count + 1 });
        };
        render() {
            return (
                <OriginalComponent count={this.state.count} handleCount={this.handleCount}/>
            )
        }
    }
    return (
        NewComponent
    )
}


