// rcc- React class component
// import React, { Component } from "react";
// export default class LifeCycleComp extends Component{
//     render(){
//         return (
//             <div></div>
//         )
//     }

// }


//1.mounting life cycle methods
//1.1.consrtuctor(props)-first method of the mounting life cycle
//1.2.static  getDerivedStateFromProps(props,state)-2nd method of the mounting life cycle
//1.3.render()-4th method of the mounting life cyle
//1.4.componentDidMount()-4th method of the mounting life cycle

import React, { Component } from "react";
import LifeCycleCompB from "./LifeCycleCompB";
export default class LifeCycleComp extends Component {
    //rcc
    //1.1.consrtuctor(props)-first method of the mounting life cycle
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        };
        console.log("I Am From Constructor")
    }
    //1.2.static  getDerivedStateFromProps(props,state)-2nd method of the mounting life cycle
    static getDerivedStateFromProps(state,props){
        console.log("I am from getDerivedStateFromProps",state,props)
        return null
    }

    changeCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    //1.4.componentDidMount()-4th method of the mounting life cycle
    componentDidMount(){
        console.log("I Am From ComponentDidMount")
    }
    //1.3.render()-4th method of the mounting life cyle
    render() {
        console.log("I Am From Render")
        return (
            <div>
                <h2>Hello From Reactjs LifeCycleComp</h2>
                <button onClick={this.changeCount}>Change Count</button>
                {/* <LifeCycleCompB count={this.state.count} /> */}
            </div>
        )
    }
}