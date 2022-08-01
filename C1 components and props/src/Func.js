// function Func() {
//     const elem = 0;

//     return (
//         <h1>
//             Hello! I am a functional based component!
//         </h1>
//     )
// }

// export default Func; 

import Header from "./Header";

const FuncWithArrow = () => {
    return (
        <div>
        <Header />
           <h1>Hello! I am an arrow function that is also a react component</h1>
        </div>
     
     
    )
}

export default FuncWithArrow;