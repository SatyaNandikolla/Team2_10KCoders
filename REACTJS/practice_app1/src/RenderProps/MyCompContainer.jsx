import { useState } from "react"
import ClickCounter from "../HigherOrderComponent/ClickCounter"
import HoverCounter from "../HigherOrderComponent/HoverCounter"
import { MyComponent } from "./MyComponent"

//rafc
export const MyCompContainer=()=>{
    const[someInfo,setSomeInfo]=useState("Some Info")
    // const returnClickCounter=()=>{
    //     return <ClickCounter/>
    // }
    // const returnHoverCounter=()=>{
    //     return <HoverCounter/>
    // }
    return(
        // <div>
        //     <MyComponent render={returnClickCounter}/>
        //     <MyComponent render={returnHoverCounter}/>
        // </div>
        <div>
            <MyComponent someInfo={someInfo} render={()=><ClickCounter/>}/>
            <MyComponent render={()=><HoverCounter/>}/>
        </div>
    )
}