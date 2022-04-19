import { Component } from "react";

export class LifeCycleCompB extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <h2>Hello I AM From React LifeCycleCompB-{this.props.count}</h2>
            </div>
        )
    }
}