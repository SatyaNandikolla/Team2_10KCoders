import Recat, { Component } from "react";
import InputRefComponent from "./InputRefComponent";
//rcc
export default class ParentComponent extends Component{
    render(){
        return(
            <div>
                <InputRefComponent/>
            </div>
        )
    }
}