export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "increment" : 
            return state + 1;
        default : 
            return state;

        // case "decrement" : {
            
        // }
    }
}