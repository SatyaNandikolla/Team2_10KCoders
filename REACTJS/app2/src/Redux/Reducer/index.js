//simple reducer will look like this
// function rootReducer(){
//     switch(key){
//         case value:
//             break;
//         default:
//             break;    
//     }
// }
const defaultData = {
    users: [],
    students:["Murali","Krishna","Sam","Kiran"],
    products:[]
};
export default function rootReducer(state = defaultData, action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state.students;
        case "GET_ALL_PRODUCTS":
            return state.products;
        default:
            return state;
    }
}