import { Component } from "react"
import MemoComp from "./MemoComp"
import PureComp from "./PureComp"
import RegularComp from "./RegularComp"

//rcc
export default class ParentComp extends Component{
    state={name:"Satya"}
    componentDidMount(){
       setInterval(()=>{
           this.setState({name:"Satya"})
       },2000)
    }
   render(){
       console.log("==Parent==")
       return(
           <div>{this.state.name}
           <PureComp/>
           <RegularComp/>
           <MemoComp/>
           </div>
           
       )
   }
}