import { Component } from "react";
import HOC from "./HOC";

//rcc
class HoverCounter extends Component{
    // constructor(props){ 
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // hoverCount=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            <div>
                <h2 onMouseOver={this.props.handleClick}> name {this.props.name} You Hovered {this.props.count} Times</h2>
            </div>
        )
    }
}
export default HOC(HoverCounter);