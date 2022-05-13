import { Component } from "react";

//rcc
class ClickCounter1 extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
        )
    }
}
export default ClickCounter1;