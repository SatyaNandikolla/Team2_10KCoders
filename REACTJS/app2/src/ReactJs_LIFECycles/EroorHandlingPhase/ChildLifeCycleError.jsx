import React, { Component } from 'react'
export class ChildLifeCycle extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("Child Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Child getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("Child componentDidMount")
    }
    render(){
        console.log("Child Render")
        return(
            <div>ChildLifeCycle</div>
        )
    }
}