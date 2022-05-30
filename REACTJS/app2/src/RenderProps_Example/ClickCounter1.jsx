import { Component } from "react";

//rcc
class ClickCounter1 extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handleClick=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            <div>
            <button onClick={this.props.handleClick}>Click Me</button>
            <h2>Clicked {this.props.count} times</h2>
            </div>
        )
    }
}
export default ClickCounter1;