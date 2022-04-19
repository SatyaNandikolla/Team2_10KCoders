import { bindActionCreators } from "redux"

const defaultState = {
    users: ["Satya","Nandikolla"]
}
const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Get_All_Users":
            return ["Satya","Nandikolla"]
        default:
            return []
    }
}
export default rootReducer;