import { useState } from "react"

//rafc
export const User=()=>{
    const[user,setUser]=useState({
        fname:"",
        lname:"",
        email:""
    })
    const handleInput=(e)=>{
        let newUser={...user}
        let nameOfInput=e.target.name
        newUser[nameOfInput]=e.target.value
        // console.log(nameOfInput)
        // console.log(e.target.value)
        // setFname(e.target.value)
        setUser(newUser)
    }
    const getUser=()=>{
        console.log(user)
        clearForm()
    }
    const clearForm=()=>{
        setUser({
            fname:"",
            lname:"",
            email:""
        })
    }
    return(
        <div style={{width:"300px", background:"lightgray", margin: "0 auto", padding:"20px"}}>
            <form>
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={user.email} onChange={(e)=>{handleInput(e)}}/><br/>
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}