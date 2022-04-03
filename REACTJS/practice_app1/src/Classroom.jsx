import { useState } from "react"
import { Student } from "./Student"

//rafc
export const Classroom=()=>{
    const[students,setStudents]=useState(["Satya","sandhya","Sridevi"])
    const deleteStudent=(student)=>{
        let studentDetails=students.filter((std)=>std!==student)
        setStudents(studentDetails)
    }
    return(
        <div>
            <h2>Hello I Am From ClassRoom Component</h2>
            <Student allStudents={students} handleDelete={deleteStudent}/>
        </div>
    )
}