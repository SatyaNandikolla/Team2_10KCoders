import React, { Component } from "react";

export class Greeetings extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return(
            <div>
                {/* {/* <h2 style={{color:"Red"}}>{this.props.msg}</h2>
                <h2>{this.props.welc}</h2> */}
                <h2>{this.props.message}</h2>
                <h2>{this.props.welMessage}</h2>
            </div> 
        )
    }

}