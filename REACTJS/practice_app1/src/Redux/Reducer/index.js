
const defaultdata = {
    users: ["Satya", "Nandikolla"]
}
const rootReducer = (state = defaultdata, action) => {
    switch (action.type) {
        case "Get_All_Users":
            return ["Satya", "Nandikolla"]
        default:
            return []
    }
}
export default rootReducer;