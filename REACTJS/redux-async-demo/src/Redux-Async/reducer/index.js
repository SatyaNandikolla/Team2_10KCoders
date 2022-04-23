import { Get_All_Users } from "../actions/actionTypes";
const defaultState={
    users:{},
}

export default function rootReducer(state=defaultState,action){
    switch(action.type){
        case Get_All_Users:
            console.log()
            return action.payload
        default:
            return state.users   
    }
}
