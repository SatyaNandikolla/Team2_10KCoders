//rafc-shortcut of react arropw functional component
import React, { useState } from 'react';
export const Students = () => {
    const [Students, setstudents] = useState({
        "id": 529,
        "email": "satyanandikolla32@gmail.com",
        "username": "Satya",
        "password": "Satyacse@529"
    });
    const handleRemove = (val) => {
        console.log("HandleRemove Called...", val)
        let newStudents = { ...Students }
        delete newStudents[val]
        setstudents(newStudents)
    }
    return (
        <div>
            {/* <ul>
            <li>{Students.id}</li>
            <li>{Students.email}</li>
            <li>{Students.username}</li>
            <li>{Students.password}</li>
            </ul> */}
            {/* <ul> */}
                {/* displaying values */}
                {/* {Object.values(Students).map((val) => {
                    return <li>{val}</li>;
                })} */}


                {/* displaying keys */}
                {/* {Object.keys(Students).map((keys) => {
                    return <li>{keys}</li>;
                })} */}

                {/* </ul> */}



                {/* displaying both keys and values*/}
                {Object.keys(Students).map((val) => {
                    // return <li key={val}>{val}:{Students[val]}</li>;
                    // we can display on browser by using paragraph,heading,div ....etc we can use anything
                    return <p key={val} onClick={() => { handleRemove(val) }}>{val}:{Students[val]}</p>;
                })}

                {Object.keys(Students).length === 0 && <p>Object is completely deleted</p>}


        </div >
    )

}
