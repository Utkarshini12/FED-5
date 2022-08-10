import React, {useState} from 'react';


// created the context 
import MiContext from './Context';



// react component
const Provider = (props) => {
    const [mission, setMission] = useState({
        mname: "Go to Russia", 
        agent: "007", 
        accept: "Not accepted"
    })

    const d = () => {

    }

    // const data = {
    //     a : 1, 
    //     b: [1, 2, 3, 4, 5], 
    //     c: {d: 1}, 
    //     d: () => {}
    // }

    return(
        // This react component is now a provider providing value : data 
        <MiContext.Provider value={{
            data: mission, 
            isMissionAccepted: () => { 
                setMission({...mission, accept : "ACCEPTED"})
            }
            }}>
            {/* is used to pass the value from this component to any other  */}
            {props.children}

        </MiContext.Provider>
    )
    
}

export default Provider; 