import { Component } from "react"

//rafc
const HOC=(OriginalComponent)=>{
    //rcc
class NewComponent extends Component{
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
        return <OriginalComponent name={"Satya"} count={this.state.count} handleClick={this.handleClick}/>
    }
}
    return NewComponent
}
export default HOC;

