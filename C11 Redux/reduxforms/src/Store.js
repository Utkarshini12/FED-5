import {createStore, combineReducers} from 'redux'; 
import {reducer as reduxFormReducer} from 'redux-form'; 

// creating the reducer dictionary 
const reducer = combineReducers({
    form: reduxFormReducer
}); 

// communication bw store and reducer is happening 
const store = (createStore)(reducer)

export default store; 

