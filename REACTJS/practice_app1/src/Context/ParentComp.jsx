//rafc
import React from "react";
import { ChildComp } from "./ChildComp";
export const ParentComp = ({ message }) => {
    return (
        <div>
            <hr />
            <h3>Message Received From Home Component:{message}</h3>
            <ChildComp message={message} />
        </div>
    )
}
