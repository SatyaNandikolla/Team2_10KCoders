import React, { useState } from "react";
export const Teja = () => {
    const [myName, setmyName] = useState("Teja") //Hook
    //Arguments to be passes to a hook is
    // 1.what is the variable name
    //a function name which can change the variable value
    return <div>
        <button onClick={()=>{setmyName("Tejdeep")}}>Change Name</button>
        <h2>Hello From {myName} Component</h2>
    </div>

}