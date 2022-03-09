// import React from "react";
// export const ClassRoom=()=>{
// return(
//     <div>

//     </div>
// )
// }//syntax of react arrow functional component rafc isthe idhi create ayyi vastundhi code 
import React, { useState } from "react";
import { Students } from "./Students";
export const ClassRoom=()=>{
// dantlo ikkada manam useState ni create chestam
const[students,setStudents]=useState(["Narendhra", "Ram","Teja","Srikanth"])
const deleteStudent=(student)=>{
    let studentsDetails=students.filter((std)=>std !== student)
    setStudents(studentsDetails)
}
return(
    <div>
        <Students allStudents={students} handleDelete={deleteStudent}/>
    </div>
)
}