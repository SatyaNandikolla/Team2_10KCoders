import { useState } from "react"

//rafc
export const User=()=>{
    const[user,setUser]=useState({
        fname:"",
        lname:""
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
            lname:""
        })
    }
    return(
        <div>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleInput(e)}}/><br/>
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}