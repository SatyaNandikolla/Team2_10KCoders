//rcc
import React, { Component } from "react";
import PureComp from "./PureComp";
import { NormalComponent } from "./NoramlComponent";
export default class ComponentsContainer extends Component{
    //rcon
    constructor(props){
        super(props);
        this.state={
            message:"Hello..Normal Component....How Are You",
            count:1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    render(){
        return(
            <div>
                <h2>Hello From Container Component</h2>
                {/* <NormalComponent message={this.state.message} count={this.state.count}/> */}
                <PureComp message={this.state.message}/>
            </div>
        )
    }
}
