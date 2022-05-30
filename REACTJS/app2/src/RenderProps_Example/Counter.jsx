import { Component } from "react";

class Counter extends Component{
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
            <>{this.props.render(this.state.count, this.handleClick)}</>
        )
    }
}
export default Counter;