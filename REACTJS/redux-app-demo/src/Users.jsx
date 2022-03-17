//rcc-react class component
import React, { Component } from "react";
import { connect } from 'react-redux';
import { createUsersAction, deleteUsersAction, getAllUsersAction } from "./Redux/Actions";
class Users extends Component {
    //con
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: ""
            }

        }
        console.log(props)
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
        
    }
    handleClear = () => {
        // this.setState({user: {
        //     fname: "",
        //     lname: "",
        //     email: ""
        // }})
        let newUser = {
            fname: "Ram",
            lname: "",
            email: ""
        };
        // console.log(this.state.user)
        this.setState({ user: newUser });
        // this.setState({user:{}})
    };
    handleCreate = () => {
        this.props.createUser(this.state.user)
        this.handleClear()
        // console.log(this.state.user)
        // this.handleClear();
    };
    editUser = () => { }
    updateUser = () => { }

    getAllUsersDetails = () => {
        this.props.dispatch(getAllUsersAction())
    }
    handleDelete = (user) => {
        // console.log(this.props)
        // this.props.dispatch(getAllUsersAction())
        this.props.deleteUser(user);
    }
    
    // componentDidMount(){
    //     this.handleClear()
    // }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Hello From Users Component</h2>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="fname">Last Name</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="fname">Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} /><br />
                    <button type="button" onClick={this.handleCreate}>Add User</button>
                </form>
                <br />
                {/* <button onClick={this.getAllUsersDetails}>Get Users</button>
                <button onClick={this.deleteUser}>Delete User</button> */}
                {this.props.users && this.props.users.map((user,i) => {
                    return <p key={i}>{user.fname} - <button>Edit User</button> 
                    <button onClick={(user)=>{this.handleDelete(user)}}>Delete User</button></p>
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
        deleteUser: (user) => dispatch(deleteUsersAction(user)),
        createUser: (user) => dispatch(createUsersAction(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
// export default Users