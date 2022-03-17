//Actions should always return an object
export function getAllUsersAction() {
    return {
        type: "GET_ALL_USERS"
    }
}
export function deleteUsersAction(){
    return{
        type:"DELETE_USER"
    }
}