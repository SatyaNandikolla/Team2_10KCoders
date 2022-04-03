import { useState } from "react"

export const Employees=()=>{
    const[employees,setEmployees]=useState(["Satya","sandhya","sridevi"])
    return(
        <div>
            <h2>Hello I Am From Employee Component</h2>
        <ul>
            {employees.map((emp)=>{
                return <li key={emp}>{emp}</li>
            })}
        </ul>
        </div>
    )
}