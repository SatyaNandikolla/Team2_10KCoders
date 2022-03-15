//rafc
import React, { useState } from "react";
import ClickCounter from "../HigherOrderComponent/ClickCounter";
import HoverCounter from "../HigherOrderComponent/HoverCounter";
import { MyComponent } from "./MyComponent";
export const MyCompContainer=()=>{
    const[someInfo,setSomeInfo]=useState("someInfo")
    const returnClickCounter=()=>{
        return <ClickCounter/>
    }
    const returnHoverCounter=()=>{
        return <HoverCounter/>
    }
    return(
        <div>
            {/* <MyComponent render={returnClickCounter}/>
            <MyComponent render={returnHoverCounter}/> */}
            <MyComponent someInfo={someInfo} render={()=><ClickCounter someInfo={someInfo}/>}/>
            <MyComponent render={()=><HoverCounter/>}/>
        </div>
    )
}