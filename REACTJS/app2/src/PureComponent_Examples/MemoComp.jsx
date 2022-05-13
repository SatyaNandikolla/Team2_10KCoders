import React from "react"

//rafc
export const MemoComp=()=>{
    console.log("MemoComp")
    return(
        <div>MemoComp</div>
    )
}
export default React.memo(MemoComp)