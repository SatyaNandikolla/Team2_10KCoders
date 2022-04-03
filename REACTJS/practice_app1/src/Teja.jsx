import { useState } from "react"

export const Teja = () => {
    const [myName, setmyName] = useState("Teja")
    return(
        
        <div>
            <button onClick={()=>{setmyName("Tejdeep")}}>Change Name</button>
            <h2>Hello I Am From {myName} Component</h2>
        </div>

    ) 
}