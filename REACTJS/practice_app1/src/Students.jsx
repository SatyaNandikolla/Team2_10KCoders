import { useState } from "react"

export const Students = () => {
    const [students, setStudents] = useState({
        "id": 529,
        "email": "satyanandikolla32@gmail.com",
        "username": "Satya",
        "password": "Satyacse@529"
    });
    const handleRemove=(val)=>{
            console.log("handleRemove Called...",val)
            let newStudents={...students}
            delete newStudents[val]
            setStudents(newStudents)
    }
    return (
        
        <div>
            
            <h2>Hello I Am From Students Component</h2>
            {/* <ul>
                <li>{students.id}</li>
                <li>{students.email}</li>
                <li>{students.username}</li>
                <li>{students.password}</li>
            </ul> */}
            <ul>
                {/* {Object.values(students).map((val)=>{
                    return <li key={val}>{val}</li>
                })} */}
                {/* {Object.keys(students).map((key)=>{
                    return <li key={key}>{key}</li>
                })} */}
                {Object.keys(students).map((val)=>{
                    return <p key={val} onClick={()=>{handleRemove(val)}}>{val}:{students[val]}</p>
                })}
            </ul>
            {Object.keys(students).length===0 && <p>object is completely deleted</p>}
            
        </div>
    )
}