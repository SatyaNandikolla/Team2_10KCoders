import { Component } from "react";
import {connect} from "react-redux"
import { getAllUsersAction } from "./Redux/Actions";


//rcc
class Users extends Component{
    getAllUsersDetails=()=>{
        this.props.dispatch(getAllUsersAction())
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Hello I AM From Users Component</h2>
                <button onClick={this.getAllUsersDetails}>Get Users</button>
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