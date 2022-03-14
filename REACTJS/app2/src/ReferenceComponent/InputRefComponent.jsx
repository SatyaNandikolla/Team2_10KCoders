import React, { Component } from "react";
import ChildInputRef from "./ChildInputRef";
//rcc
export default class InputRefComponent extends Component {
    //rcon
    constructor(props) {
        super(props);
        this.childCompRef = React.createRef()

        // this.inputRef=Recat.createRef()
        // this.inputRef=null
        // this.cbInputRef=(element)=>{
        //     this.inputRef=element
        // }
        // this.state={  

        // }    
    }
    handleWelcome=()=>{
        this.childCompRef.current.showWelcomeMessage();
    }
    render() {
        return (
            <div>
                {/* <input type="text" ref={this.cbInputRef}/> */}
                <button onClick={this.handleWelcome}>Show Welcome</button>
                <hr />
                <ChildInputRef ref={this.childCompRef} />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.childCompRef)
        // this.inputRef.current.focus()
        // this.inputRef.focus()
    }
}