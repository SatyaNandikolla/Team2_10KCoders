import { Component } from "react";
import HOC from "./HOC";

//rcc
class ClickCounter extends Component{
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
                <button onClick={this.props.handleClick}> name {this.props.name} Clicked {this.props.count} times</button>
            </div>
        )
    }
}
export default HOC(ClickCounter);