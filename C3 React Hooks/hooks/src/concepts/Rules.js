//1.  only use hooks inside functional react components, not in class and not in regular functions
import {useState} from 'react'
// Cannot use hooks in class based component
// class Hooks extends Component{
//     render() {
//     const [state, setState] = useState(); 

//         return(

//         )
//     }
// }

// cannot use hooks inside regular functions
// function multiply() {
//     const [state, setState] = useState(); 

//     return a*b
// }

// function handleSubmit(e) {
//     window.location.href = "/home"
// }


function Hooks() {
    const [state, setState] = useState();

    // mounting : hooks will load up

    // 2. hooks should always be called on the top level of a react component
    
// DO not use hooks inside conditions, loops, regular functions
    // if(x > 5) {
    //     const [state, setState] = useState();
    // }
    
    return (
        <button onClick={handleSubmit}></button>

    )
}


export default Hooks; 