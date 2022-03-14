//rcc
import React, { Component } from "react";
export default class ChildInputRef extends Component{
    showWelcomeMessage=()=>{
        alert("Hey I Am From ChildInputRef Component")
    }
    // abc=()=>{
    //     console.log("Hello From Abc")
    // }
    render(){
        return(
            <div>
                <input type="text" name="" id=""/>
            </div>
        )
    }

}