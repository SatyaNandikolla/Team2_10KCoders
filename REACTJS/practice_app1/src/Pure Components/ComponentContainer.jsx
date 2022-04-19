import { Component } from "react";
import FuncChild from "./FuncChild";
import { NormalComponent } from "./NormalComponent";
import { PureComponent } from "./PureComponent";


//rcc
export class ComponentContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello Guru How Are You",
            count:1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    render(){
        return(
            <div>
            {/* <NormalComponent message={this.state.message} count={this.state.count}/> */}
            {/* <PureComponent message={this.state.message} /> */}
            <FuncChild message={this.state.message} />
            </div>
        )
    }
}