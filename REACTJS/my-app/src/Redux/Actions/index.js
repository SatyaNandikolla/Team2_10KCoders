export function addUserAction(user){
    // console.log(user)
    return{
        type:"Add_User",
        payload:user
    }
}
export function deleteUserAction(user){
    return{
        type:"Delete_User",
        payload:user
    }
}
export function updateUserAction(user){
    return{
        type:"Update_User",
        payload:user
    }
}