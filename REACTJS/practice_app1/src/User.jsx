import { useState } from "react"

export const User = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email:" "
    })
    const handleInput = (e) => {
        // console.log(e.target.value)
        // setfname(e.target.value)
        let newUser = { ...user }
        let nameofInput = e.target.name
        newUser[nameofInput] = e.target.value
        // console.log(nameofInput)
        setuser(newUser)
    }
    const getUser = () => {
        console.log(user)
        clearForm()
    }
    const clearForm = () => {
        setuser({
            fname: "",
            lname: "",
            email:" "
        })
    }
    return (
        <div style={{width:"300px",background:"lightGray",margin :"0 auto", padding:"20px"}}>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleInput(e) }} /><br />
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleInput(e) }} /><br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={user.email} onChange={(e) => { handleInput(e) }} /><br />
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}