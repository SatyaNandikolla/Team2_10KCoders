// rafc
// import React from 'react';
// export const Students=(props)=>{
//         return(
//         <div>
//             {props.allStudents.map((student)=>{
//                 return <p key={student}>{student}<button onClick={()=>props.handleDelete(student)}>Delete</button></p>
//                 //without error we have to give the key
//                 // return <p key={students}>{students}</p>
//             })}
          
//         </div>
//     )
// }

//rcc-reactjs class component

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Students extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((std)=>{
                    return <p key={std}>{std}</p>
                })}
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         students:state.students
    }
}

export default connect(mapStateToProps)(Students)





