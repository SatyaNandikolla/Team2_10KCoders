const defaultState={
    users: [{fname: "Ram Krishna"}, {fname:"Ravi Krishna"}, {fname:"Sam Sundar"} ]
}
export default function rootReducer(state=defaultState,action){
    switch(action.type){
        case "Add_User":
            // console.log(state)
            //       console.log(action)
                //   return{...state}
                var allUsers=[...state]
                allUsers.push(action.payload)
                return allUsers
        case "Delete_User":
            return state.filter((user)=>user.fname !== action.payload.fname)

        case "Update_User":
                      console.log(action.payload)
                      allUsers=[...state]
                      allUsers[action.payload.id]=action.payload
                      return allUsers
        default:
            return state.users
            
    }
}                                                                            