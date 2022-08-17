// define all the states in redux 
import {useSelector} from 'react-redux'

const View = () => {
    // createing a state count in state directory 
    const count = useSelector((state) => state.count)

    return(
        <h1>{count} </h1>
    )
}


export default View;