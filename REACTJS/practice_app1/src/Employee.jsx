// import { useState } from "react"

import { useState } from "react"

// export const Employee=()=>{
//    const[employees,myEmployees]=useState(["Satya","Sandhya","Sridevi"])
//     return(
//         <div>
//             <ul>
//                 {employees.map((emp)=>{
//                     return <li key={emp}>{emp}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }
export const Employee=()=>{
    const[employees,setEmployees]=useState(["Satya","Sandhya","Sridevi"])
return(
    <div>
        <ul>
    {employees.map((emp)=>{
        return <p key={emp}>{emp}</p>
    })}
    </ul>
    </div>
)
}