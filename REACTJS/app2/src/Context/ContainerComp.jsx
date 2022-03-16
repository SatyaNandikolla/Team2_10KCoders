//rafc
import React, { useState } from "react";
import { HomeComp } from "./HomeComp";
import { UserProvider } from "./UserContext";

export const ContainerComp = () => {
    //hook
    const [message, setMessage] = useState("Welcome To React Context...")
    return (
        <div>
            <UserProvider>
            <h3>Hello From Container Comp</h3>
            <HomeComp message={message}/>
            </UserProvider>
        </div>
    )
}
