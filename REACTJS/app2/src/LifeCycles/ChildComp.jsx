//rcc
//2.updating lifecycle methods
//2.1.static getDerivedStateFromProps(state,props)-first method of updating life cycle
//2.2.shouldComponentUpdate(nextProps,nextState)-first method of updating life cycle
//2.3.render()-third method of updating life cycle 
//2.4.getSnapShotBeforeUpdate(prevProps,prevState)-fourth method of updating life cycle
//2.5.componentDidUpdate(prevProps,prevState,snapshot)-fifth method of updating life cycle

import React, { Component } from "react";
export default class ChildComp extends Component {
    //rcon
    constructor(props) {
        super(props)
        console.log("I Am From Constructor from ChildComp")
        this.state = {

        }
    }
    //2.1.static getDerivedStateFromProps(state,props)-first method of updating life cycle
    static getDerivedStateFromProps(state,props) {
        console.log("Hello I Am From getDerivedStateFromProps", state, props)
        return null
    }
    //2.2.shouldComponentUpdate(nextProps,nextState)-seccond method of updating life cycle
    shouldComponentUpdate(nextProps,nextState){
        console.log("Hello I Am from shouldComponentUpdate - from ChildComp")
        return true
    } 
    //2.4.getSnapShotBeforeUpdate(prevProps,prevState)-fourth method of updating life cycle 
    getSnapshotBeforeUpdate(prepProps,preState){
        console.log("Hello I Am From getSnapshotBeforeUpdate - from ChildComp")
        return null
    }
    //2.5.componentDidUpdate(prevProps,prevState,snapshot)-fifth method of updating life cycle
    componentDidUpdate(){
        console.log("Hello I Am From componentDidUpdate - from ChildComp")

        //we need to write code which will execute after updation completed
    }
    //2.3.render()-third method of updating life cycle  
    render() {
        console.log("I Am From Render - from ChildComp")
        return (
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}