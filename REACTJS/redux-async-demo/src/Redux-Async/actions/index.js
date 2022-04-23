import { Get_All_Users } from "./actionTypes";
import axios from 'axios'
export function getAllUserAction() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
    //     console.log(res.data)
    //     return{
    //         type:Get_All_Users,
    //         payload:res.date
    //     }
    // })


    //When we add thunk middleware ...we can return async function which return an object
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.data)
            dispatch({
                type: Get_All_Users,
                payload: res.data
            })
        })
    }
}