function Welcome(props) {
    return (
        <div>
            <h3>Hello, {props.name}!</h3>
        </div>
    )
}

props : {
    name: "Ashih"
}

export default Welcome; 

// function sum(a) {
//     return a  + 2
// }

// sum -- calling but not invoking
// ()=> sum(3,5) -- invoking a function after a callback 
// sum() -- invoking the func directly


// sum(3) = 5
// sum(4) = 6
// sum(4) = 6
// sum(1) = 3