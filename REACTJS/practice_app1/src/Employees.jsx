import { useState } from "react"

export const Employees=()=>{
    const[employees,setEmployees]=useState(["Murali","Krishna","Ram","Ravi"])
    return(
        <div>
            <ul>
                {/* {employees.map((emp)=>{
                    return <li key={emp}>{emp}</li>
                })} */}
                
            </ul>
        </div>
    )
}