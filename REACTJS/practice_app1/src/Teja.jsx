import { useState } from "react"

export const Teja = () => {
    const [myName, setmyName] = useState("Murali")
    return (
        <div>
            <button onClick={() => { setmyName("Tejdeep") }}>Change Name</button>
            <h2>Hello I am {myName} Component</h2>
        </div>
    )
}