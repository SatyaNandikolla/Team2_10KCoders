//Class Component
import React, { Component } from "react";
export class Narendhra extends Component {
//javascript way of displaying the value from javascript to html
//var message = "Hello From Narendhra Class Component"
//document.querySelector("h3").innerHTML = message

constructor(){
    this.state={}
}

render() {
    return <h2></h2>
}
}

export class Kiran extends Component {
    render() {
        return <h2>I Am From Kiran Class Component</h2>
    }
}

export default class Divya extends Component {
    render() {
        return <h2>Hello I Am From Divya Class Component</h2>
    }
}