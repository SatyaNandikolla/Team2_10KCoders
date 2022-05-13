import React, { Component } from 'react'
import { ChildLifeCycleUpdating } from './ChildLifeCycleUpdating'
export class ParentLifeCycleUpdating extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        // console.log("Parent Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Parent getDerivedStateFromProps")
        // return {name:"Sandhya"}
        return null;
    }
    // componentDidMount(){
    //     console.log("Parent ComponentDidMount")
    // }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Parent shouldComponentUpdare")
        // return true;
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Parent getSnapshotBeforeUpdate")
        return "snapshot";
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("snapshot",snapshot)
        console.log("Parent componentDidUpdate")
        console.log(prevState)
    }
    changeState=()=>{
        this.setState({
            name:"Sandhya"
        })
    }
    render(){
        // console.log(this.state.name)
        console.log("Parent Rednder")
        return(
            <div>
                ParentLifeCycle
                <ChildLifeCycleUpdating/>
                <button onClick={this.changeState}>{this.state.name}</button>
            </div>
        )
    }
}