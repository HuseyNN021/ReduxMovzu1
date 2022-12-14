export const counterReducer=(state=0,action )=>{
    switch(action.type){
        case 'INCREAMENT':
            return state=state+action.payload; 
        case 'DECREAMENT':
            return state=state-action.payload;
        default:
             return state;
    }
}