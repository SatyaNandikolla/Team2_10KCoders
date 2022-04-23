import { Component } from "react";
import { connect } from "react-redux";
import { getAllUserAction } from "../Redux-Async/actions";

//rcc
class Users extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}> Get All Users</button>
                <h2>Hello I Am From Users Component</h2>
            </div>
        )
    }
}
function mapStateToProps(state){
return{
    users:state
}
}
function mapDispatchToProps(dispatch){
    return{
        getAllUsersFunc:()=>dispatch(getAllUserAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)