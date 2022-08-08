import {Component} from 'react'

// function Uncontrolled() {
//     return(
//         <form>
//             <label>Name
//                 <input type="text" />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }

// export default Uncontrolled;

class Uncontrolled extends Component {
    render() {
        return(
            <form>
            <label>Name
                <input type="text" />
            </label>
            <input type="submit" value="Submit" />
        </form>

        )
    }
}

export default Uncontrolled; 