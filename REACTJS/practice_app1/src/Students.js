// import { useState } from "react"
// //rafc
// export const Students=(props)=>{
//     const[students,setStudents]=useState()
//     return(
//         <div>
//             {props.allStudents.map((student)=>{
//                 return <p key={student}>{student} <button onClick={()=>{props.handleDelete(student)}}>Delete</button></p>
//             })}
//             {/* <h2>Hello I Am From Satya Component</h2> */}
//         </div>
//     )
// }

import { Component } from "react";
import { connect } from "react-redux";


//rcc
class Students extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((std) => {
                    return <p key={std}>{std}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}
export default connect(mapStateToProps)(Students)
