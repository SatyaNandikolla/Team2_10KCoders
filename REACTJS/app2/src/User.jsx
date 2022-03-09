//rafc
import React, { useState } from "react";
import './index.css';
export const User = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    const handleInput = (e) => {
        // console.log(e.target.value)
        // setfname(e.target.value)
        let newUser = { ...user }
        let nameofInput = e.target.name
        newUser[nameofInput] = e.target.value
        // console.log(nameofInput)
        setuser(newUser)
    };


    const getUser = () => {
        console.log(user)
        clearForm()
    }
    const clearForm = () => {
        setuser({
            fname: "",
            lname: "",
            email: ""
        })
    }
    return (
        <div id="myForm">
        {/* style={{
             width:"300px",background:"lightgray",margin:"0 auto", padding:"20px"
            }} */}
            <form>
                <label htmlFor="fname">First Name:</label>
                <input type="text"
                    name="fname"
                    value={user.fname}
                    // defaultValue="Search...."
                    onChange={(e) => { handleInput(e) }}
                // readOnly
                /><br />

                <label htmlFor="fname">Last Name:</label>
                <input type="text"
                    name="lname"
                    value={user.lname}
                    onChange={(e) => { handleInput(e) }} /><br />

                <label htmlFor="fname">Email:</label>
                <input type="text"
                    name="email"
                    value={user.email}
                    onChange={(e) => { handleInput(e) }} /><br />
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}
