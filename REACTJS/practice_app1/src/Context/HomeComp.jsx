//rafc
import React from "react";
import { ParentComp } from "./ParentComp";
export const HomeComp = ({ message }) => {
    return (
        <div>
            <hr />
            <h3>The Message Recived From Container is:{message}</h3>
            <ParentComp message={message} />
        </div>
    )
}
