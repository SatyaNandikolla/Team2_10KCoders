// import React, { Component } from 'react'

import { Component } from "react";


// export default class User extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              user : {
//                  fname:""
//              },
//             users:[{fname:"Ram"},
//             {fname:"Teja"},
//             {fname:"Sashi"}],
//             index:null
//         }
//     }

//     handleChange = (e)=>{
//         let newUser = {...this.state.user}
//         newUser[e.target.name] = e.target.value
//         this.setState({user:newUser})
//     }

//     handleClear = ()=>{
//         this.setState({user:{fname:"",},})
//     }

//     handleAddUser = ()=>{
//         let AllUsers = [...this.state.users]
//         AllUsers.push(this.state.user)
//         this.setState({users:AllUsers});
//         this.handleClear()
//     }

//     handleUpdate= ()=>{
//         let AllUsers = [...this.state.users]
//         AllUsers[this.state.index] = this.state.user
//         this.setState({users:AllUsers,index:null})
//         this.handleClear()
//     }

//     handleEditUser = (user,i)=>{
//         this.setState({user,index:i})
//     }

//     handleDeleteUser= (user)=>{
//         let AllUsers = [...this.state.users];
//         this.setState({users:AllUsers.filter((au)=>au.fname !== user.fname)})
//         this.handleClear()
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label htmlFor='fname'>Fname:</label>
//                     <input type="text" name="fname" value={this.state.user.fname} 
//                     onChange={(e)=>{this.handleChange(e)}}></input>
//                     {this.state.index!==null?<button onClick={this.handleUpdate} 
//                     type='button'>UpdateUser</button>:<button type="button"
//                     onClick={this.handleAddUser}>  AddUser</button>}
//                 </form>
//                 <hr/>
//                 {this.state.users.map((user,i)=>(
//                     <p key={i}>
//                         <span onClick={()=>{this.handleEditUser(user,i)}}>{user.fname}</span>
//                         <span onClick={()=>{this.handleDeleteUser(user)}}>{" "}X{" "}</span>
//                     </p>
//                 )

//                 )}
//             </div>
//         )
//     }
// }
export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: ""
            },
            users: [{fname: "Ram"}, {fname:"Ravi"}, {fname:"Sam"} ],
            index:null
        }
    }
    handleAddUser = () => {
        let allUsers = [...this.state.users]
        allUsers.push(this.state.user)
        this.setState({ users: allUsers })
        this.handleClear()
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
            }
        })
    }
    handleEditUser=(user,i)=>{
        this.setState({user,index:i})
    }
    handleUpdate=()=>{
         let allUsers=[...this.state.users]
         allUsers[this.state.index]=this.state.user
         this.setState({users:allUsers,index:null})
         this.handleClear()
    }
    handleDelete=(user)=>{
        let allUsers=[...this.state.users]
        this.setState({users:allUsers.filter((au)=>au.fname!==user.fname)})
        this.handleClear()
    }
    render() {
        return (
            <div>
                <h2>Hello I AM From Users Component</h2>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
                   {this.state.index!==null? (<button type="button" onClick={this.handleUpdate}>Update User</button>):(<button type="button" onClick={this.handleAddUser}>Add User</button>)}
                    
                    
                    {this.state.users.map((user, i) => (
                        <p key={i} >
                            <span onClick={()=>{this.handleEditUser(user,i)}}>{user.fname}</span>
                            -<span onClick={()=>{this.handleDelete(user)}}>X</span></p>
                    ))}
                </form>
            </div>
        )
    }
}