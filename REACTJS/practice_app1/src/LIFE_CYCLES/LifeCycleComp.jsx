import { Component } from "react";
import { LifeCycleCompB } from "./LifeCycleCompB";

export class LifeCycleComp extends Component{
    constructor(props){
        super(props)
        this.stata={
            count:1
        }
        console.log("Hello I AM From React LifeCycleComp From Constructor")
    }
    changeCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("Hello I AM From React LifeCycleComp From Render")
        return(
            <div>
                <h2>Hello I AM From React LifeCycleComp</h2>
                <LifeCycleCompB count={this.state.count}/>
                <button onClick={this.changeCount}>Change Count</button>
            </div>
        )
    }
}