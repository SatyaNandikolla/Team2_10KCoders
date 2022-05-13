import React, { Component } from 'react'
import { ChildLifeCycle } from './ChildLifeCycleError'
export class ParentLifeCycle extends Component{

    //1.static getDerivedStateFromError(error)
    //2.componentDidCatch(error,Info)
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("Parent Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Parent getDerivedStateFromProps")
        return {name:"Sandhya"}
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }
    render(){
        console.log(this.state.name)
        console.log("Parent Rednder")
        return(
            <div>
                ParentLifeCycle
                <ChildLifeCycle/>
            </div>
        )
    }
}