//Actions should always return an object
export function getAllUsersAction() {
    return {
        type: "GET_ALL_USERS"
    }
}
export function createUsersAction(user){
    return{
        type:"CREATE_USER",
        payload:user
    }
}
export function deleteUsersAction(user){
    return{
        type:"DELETE_USER",
        payload:user
    }
}