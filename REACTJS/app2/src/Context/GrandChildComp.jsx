//rafc
import React from "react";
import { ChildComp } from "./ChildComp";
export const GrandChildComp = ({ message }) => {
    return (
        <div>
            <hr />
            <h3>The Message Recived From Child Is:{message}</h3>
            <ChildComp message={message} />
        </div>
    )
}