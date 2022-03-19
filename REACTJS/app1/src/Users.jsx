//rcc-react class component
import React, { Component } from "react";
export default class Users extends Component {
    //rcon
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: " ",
            },
            users: [],
        }
    }
    handleAddUser = () => {
        let allUsers = [...this.state.users]
        allUsers.push(this.state.user)
        this.setState({ users: allUsers });
        this.handleClear()

    };
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    handleClear = () => {
        this.setState({
            user: {
                fname: "",
            },
        });
    };


    render() {
        return (
            <div>
                <h2>Hello From Users Component</h2>
                <form>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
                    <button type="button" onClick={this.handleAddUser}>Add User</button>
                </form>
                {this.state.users.map((user, i) => (
                    <p key={i}>{user.fname}</p>


                ))}

            </div>
        )
    }
}