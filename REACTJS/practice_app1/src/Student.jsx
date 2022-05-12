// import { useState } from "react"

import { useState } from "react"

// //rafc
// export const Students=()=>{
//     const[students,setStudents]=useState({
//         "id":529,
//         "email":"satyanandikolla32@gmail.com",
//         "Username":"Satya",
//         "Password":"Satyacse@529"
//     })
//     const handleRemove=(val)=>{
//         console.log("handleRemove Called",val)
//         // delete students[val]
//         let newStudents={...students}
//         delete newStudents[val]
//         setStudents(newStudents)
//     }
//     return(
//         <div>
//             <ul>
//                 {Object.keys(students).map((val)=>{
//                     return <li key={val} onClick={()=>{handleRemove(val)}}>{val}:{students[val]}</li>
//                 })}
//             </ul>
//             {Object.keys(students).length===0 && <p>Object is Completely deleted</p>}
//         </div>
//     )
// }

export const Students=()=>{
    const[students,newStudents]=useState()
    return(
        <div>
            <h2>Hello I Am From Students Component</h2>
        </div>
    )
}