// import { Component } from "react";

// //rcc
// export default class Users extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             user: {
//                 fname: ""
//             },
//             users: [],
//             index: null
//         }
//     }
//     handleAddUser = () => {
//         let allUsers = [...this.state.users]
//         allUsers.push(this.state.user)
//         this.setState({ users: allUsers })
//         this.handleClear()
//     }
//     handleChange = (e) => {
//         let newUser = { ...this.state.user }
//         newUser[e.target.name] = e.target.value
//         this.setState({ user: newUser })
//     }
//     handleClear = () => {
//         this.setState({
//             user: {
//                 fname: ""
//             }
//         })
//     }
//     handleEditUser = (user, i) => {
//         this.setState({ user, index: i })
//     }
//     handleUpdate = () => {
//         let allUsers = [...this.state.users]
//         allUsers[this.state.index] = this.state.user
//         this.setState({ users: allUsers, index: null })
//         this.handleClear()
//     }
//     handleDeleteUser = (user) => {
//         let allUsers = [...this.state.users]
//         this.setState({ users: allUsers.filter((au) => au.fname !== user.fname) })
//         this.handleClear()
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Hello From Users Component</h2>
//                 <form>
//                     <label htmlFor="fname">First Name:</label>
//                     <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
//                     {this.state.index ? (<button type='button' onClick={this.handleUpdate}>UpdateUser</button>) :
//                         (<button onClick={this.handleAddUser} type='button'>AddUser</button>)}

//                 </form>
                
//                 {this.state.users.map((user,i)=>(
//                     <p key={i}>
//                         <span onClick={()=>{this.handleEditUser(user,i)}} >{user.fname}</span>
//                         <span onClick={()=>{this.handleDeleteUser(user)}}>yyyyyyyyyyy</span>
//                     </p>
//                 ))}

//             </div >
//         )
//     }
// }



