const defaultState={
    users:["S","A","T","Y","A"]
}
let allUsers=["S","A","T","Y","A"]
const rootReducer=(state=defaultState,action)=>{
    switch(action.type){
        case "Get_All_Users":
            return allUsers
        default:
            return []
    }
}
export default rootReducer;                                                                                 