import { Component } from "react";
import { HOC } from "./HOC";

class HoverCounter extends Component {
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
                <h2 onMouseOver={handleCount}> You Hovered{count} times</h2>
            </div>
        )
    }
}
export default HOC(HoverCounter)