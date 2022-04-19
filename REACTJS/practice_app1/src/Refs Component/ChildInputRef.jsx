import { Component } from "react";

//rcc
export default class ChildInputRef extends Component{
    showWelcomeMessage=()=>{
        alert("Hello I AM From ChildInputRef Component")
    }
    // abc=()=>{
    //     console.log("Hello I Am From abc")
    // }
    render(){
        return(
            <div>
                <input type="text" name="" id=""/>
            </div>
        )
    }
}

