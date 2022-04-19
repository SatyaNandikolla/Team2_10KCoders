import { useState } from "react"
import { Students } from "./Students"

//rafc
export const ClassRoom = () => {
    const [students, setStudents] = useState(["Satya", "Sandhya", "Sridevi"])
    const deleteStudent = (student) => {
        let studentDetails = students.filter((std) => std !== student)
         setStudents(studentDetails)
    }
    return (
        <div>
            {/* <h2>Hello I Am From ClassRoom Component</h2> */}
            <Students allStudents={students} handleDelete={deleteStudent}/>
        </div>
    )
}


