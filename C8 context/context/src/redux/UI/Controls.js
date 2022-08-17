// invoke the action
import { useDispatch } from "react-redux";
// invoke this action
import {increment} from "../action"


const Controls = () => {
    const dispatch = useDispatch(); 

    const incrementCount = () => {
        // invoking increemnet onClick 
        dispatch(increment());
    }
    return (
        <button onClick ={incrementCount} >
            Add Count
        </button>
    )
}

export default Controls;

