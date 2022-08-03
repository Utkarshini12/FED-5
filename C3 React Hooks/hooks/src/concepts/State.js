//useState :  stateful logic in a functional component

import {useState} from 'react'; 

function Counter() {
    // initialise the state value 
    // this.state = {count : 0, }
    // update the state values 
    // setState({count :this.state.count + 1 })

    const [state, setState] = useState()
    // state : initial value --> prevState
    // setState({}) --> nextState

    const [count, setCount] = useState(2)
    const [name, setName] = useState("Utkarshini")

    return(
        <div>
            <h4>We are learning hooks!</h4>
            <h2 className='text-danger'>Hi, {name}!</h2>
            <p>Counter App</p>
            <h1 className=' text-success'>Current Count : {count} </h1>
            <button onClick={() => setCount(count + 1)} className="btn btn-secondary m-1"> + </button>
            <button onClick={() => setCount(2)} className="btn btn-secondary m-1"> Reset </button>
            <button onClick={() => setCount(count - 1)} className="btn btn-secondary m-1"> - </button>
            {/* three buttons in a single row: incre, dcre, reset */}
        </div>
    )
    // sum()
    // sum
    // () => sum()
}

export default Counter; 