import React, { Component } from "react";
export default class ConditionComponent extends Component{
    //3.unmounting phase method
    //3.1.componentWillUnmount()
    componentWillUnmount(){
        alert("I Am Going To Be Removed Now")
    }
    render(){
        return(
            <div>
                <h2>Hello I Am Visible Now</h2>
            </div>
        )
    }
}