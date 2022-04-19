import { Component } from "react";
import InputRefComp from "./InputRefComp";

//rcc
export default class ParentCompp extends Component{
    render(){
        return(
            <div>
                {/* <h2>Hello I AM From ParentComp</h2> */}
                <InputRefComp/>
            </div>
        )
    }
}