import React, { Component } from "react";
export default class LifeCycleCompB extends Component{
    //rcon-react constructor
    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }
    constructor(props){
        super(props)
        this.state={

        }
        console.log("Hello From LifeCycleCompB Constructor")
    }
    render(){
        console.log("Hello From LifeCycleCompB Render")
        return (
            <div>
                <h2>Hello From LifeCycleCompB -{this.props.count}</h2>
            </div>
        )
    }
}