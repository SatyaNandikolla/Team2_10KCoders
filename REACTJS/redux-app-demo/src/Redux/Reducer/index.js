const defaultState = {
    users: ["Murali", "Krishna", "Ram", "Ravi"]
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ALL_USERS":
            return defaultState.users
        case "DELETE_USER":
            defaultState.users.pop()
            return defaultState.users

        default:
            return defaultState.users
    }
}
export default rootReducer