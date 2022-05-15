
const initial =[]

export default function reducer(state = initial,action){
    const {type,payload} = action;
    switch(type){
        case "ADD":
// manaki previous values miss avvakudadhual miss avvakunda vundali ante first mana state 
// valus ni destracture cheskovali [...state]trvatha payload lo aa value ni add cheskovali
            return [...state,payload];
        case "REMOVE":
            return state.filter(product => product.name !== payload.name);
        default:
            return state;
    }
}