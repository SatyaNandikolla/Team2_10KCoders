import { Component } from "react";
import Greetings from "../Greetings";

export default class Harish extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello I Am From Harish component"
        }
    }
    render() {

        return (

            <div>
<button onClick={() => { this.setState({ message: "Hello Harish Component I have Changed" }) }}>Change Message</button>
                <h2></h2>
                <Greetings/>
            </div>
        )
    }
}