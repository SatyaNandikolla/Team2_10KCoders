//rcc-react class component
import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteUsersAction, getAllUsersAction } from "./Redux/Actions";
class Users extends Component {
    //con
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(props)
    }
    getAllUsersDetails = () => {
        this.props.dispatch(getAllUsersAction())
    }
    deleteUser = () => {
        console.log(this.props)
        this.props.dispatch(getAllUsersAction())
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Hello From Users Component</h2>
                <button onClick={this.getAllUsersDetails}>Get Users</button>
                <button onClick={this.deleteUser}>Delete User</button>
                {this.props.users && this.props.users.map((user) => {
                    return <p key={user}>{user}</p>
                })}
            </div>
        );
    }
    // componentDidMount() {
    //     console.log(this.props)
    //     this.props.dispatch(getAllUsersAction())

    // }

}
//to add store for a component
//1.Ned to import connect method
//pass a function which connects store to component
function mapStateToProps(state) {
    return {
        users: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(getAllUsersAction()),
        deleteUser: (user) => dispatch(deleteUsersAction(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);
// export default Users