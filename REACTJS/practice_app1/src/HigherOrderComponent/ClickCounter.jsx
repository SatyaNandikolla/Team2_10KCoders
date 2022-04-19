import { Component } from "react";
import { HOC } from "./HOC";

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    // }
    // handleCount = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }
    render() {
        console.log(this.props)
        let{handleCount,count}=this.props
        return (
            <div>
                <button onClick={handleCount}>Change Count</button>
                <h2>You Clicked-{count} times</h2>
            </div>
        )
    }
}
export default HOC(ClickCounter)

