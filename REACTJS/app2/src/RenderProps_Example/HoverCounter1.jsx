import { Component } from "react";

//rcc
class HoverCounter1 extends Component{
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
            <h2 onMouseOver={this.props.handleClick}>Clicked {this.props.count} times</h2>
        )
    }
}
export default HoverCounter1;