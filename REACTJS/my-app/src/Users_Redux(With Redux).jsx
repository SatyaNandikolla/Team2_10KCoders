import { Component } from "react"
import { connect } from "react-redux"
import { addUserAction, deleteUserAction, updateUserAction } from "./Redux/Actions"

class Users_Redux extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: ""
            },
            users: [{ fname: "Ram" }, { fname: "Ravi" }, { fname: "Sam" }],
            index: null
        }
        console.log(props)
    }
    handleAddUser = () => {
        // let allUsers = [...this.state.users]
        // allUsers.push(this.state.user)
        // this.setState({ users: allUsers })
        // this.handleClear()
        // console.log(addUserFunc)
        // console.log(this.props)
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    handleClear = () => {
        this.setState({
            user: {
                fname: " "
            },
            index:null
        })
    }
    handleEditUser = (user, i) => {
        this.setState({ user, index: i })
    }
    handleUpdate = () => {
        // let allUsers = [...this.state.users]
        // allUsers[this.state.index] = this.state.user
        // this.setState({ users: allUsers, index: null })
        // this.handleClear()
        let updateUser={...this.state.user}
        updateUser['id']=this.state.index
        this.props.updateUserFunc(updateUser)
        this.handleClear()
    }
    // handleDelete = (user) => {
    //     let allUsers = [...this.state.users]
    //     this.setState({ users: allUsers.filter((au) => au.fname !== user.fname) })
    //     this.handleClear()
    // }
    render() {
        const { addUserFunc, deleteUserFun, updateUserFunc } = this.props
        return (
            <div>
                <h2>Hello I AM From Users Component</h2>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
                    {this.state.index !== null ? (<button type="button" onClick={this.handleUpdate}>Update User</button>) 
                    : (<button type="button" onClick={()=>{addUserFunc(this.state.user)
                    this.handleClear()}}>Add User</button>)}


                    {this.props.users.map((user, i) => (
                        <p key={i} >
                            <span onClick={() => { this.handleEditUser(user, i) }}>{user.fname}</span>
                            -<span onClick={() => { deleteUserFun(user) }}>X</span></p>
                    ))}
                    
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUserFunc: (user) => dispatch(addUserAction(user)),
        deleteUserFun: (user) => dispatch(deleteUserAction(user)),
        updateUserFunc: (user) => dispatch(updateUserAction(user))
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        users: state
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(Users_Redux)