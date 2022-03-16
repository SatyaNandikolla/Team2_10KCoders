//rafc
import React from "react";
import { ChildComp } from "./ChildComp";
import { UserConsumer } from "./UserContext";
export const GrandChildComp = ({ message }) => {
    return (
        <div>
            {/* <hr /> */}
            {/* <h3>The Message Recived From Child Component:{message}</h3> */} 
            <UserConsumer>{(val)=>{
                 console.log(val)
                return <h3>Message From Container Component (Context):{val.name}</h3>
            }} 
            </UserConsumer>          
        </div>
    )
}