// import { Component } from "react";
// import axios from "axios";

import { Component } from "react";
import { connect } from "react-redux";
import { getAllUsersAction } from "./Redux/Actions";


// export class Users extends Component{
//     constructor(){
//         super()
//         this.state={
//             products:[]
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Hello I AM From Users Component</h2>
//                 <ul>{this.state.products.map((product)=>{
//                     // return <li>{product.title}</li>
//                     return(
//                         <li><img src={product.image} alt=""/></li>
//                     )
//                 })}</ul>
//             </div>
//         )
//     }
//     componentDidMount(){
// //    console.log("Component Mounted")
//    let URL="https://fakestoreapi.com/products"
//    axios.get(URL).then(res=>{
//     console.log(res.data)
//     let newState ={...this.state}
//     newState['products']=res.data
//     this.setState(newState)
// })
//     }
// }

//rcc
class Users extends Component{
    getAllUserDetails=()=>{
        this.props.dispatch(getAllUsersAction())
    }
    render(){
        console.log(this.props)
        return(
            <div>
                
                <button onClick={this.getAllUserDetails}>Get User</button>
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllUsersAction())
        
    // }
}
function mapStateToProps(state){
    return{
        users:state
    }
}
export default connect(mapStateToProps)(Users)