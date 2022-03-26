import { useState } from "react"

export const Students=()=>{
   const[students,setStudents]=useState(
       {
           "id":529,
           "email":"sn@gmail.com",
           "username":"Satya",
           "password":"Satyacse529"           
       }
   )
    return(
        <div>
            {/* <ul>
            <li>{Students.id}</li>
            <li>{Students.email}</li>
            <li>{Students.username}</li>
            <li>{Students.password}</li>
            </ul> */}
            {/* <ul> */}
                
               {Object.values(Students).map((val) => {
                    return <li>{val}</li>;
                })} 
        </div>
    )
}