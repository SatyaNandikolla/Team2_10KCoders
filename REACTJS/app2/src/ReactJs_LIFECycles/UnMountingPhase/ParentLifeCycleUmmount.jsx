import React, { Component } from 'react'
import { ChildLifeCycleUnmount } from './ChildLifeCycleUnmount'
export class ParentLifeCycleUnmount extends Component{
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
        return true;
        // return false;
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
                ParentLifeCycleUnmount
                {this.state.name=== "Satya" && <ChildLifeCycleUnmount/>}  
                <button onClick={this.changeState}>{this.state.name}</button>
            </div>
        )
    }
}