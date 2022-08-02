import {useEffect} from 'react'


function Func() {

    console.log("")

    useEffect(()=> {
        console.log('useEffect is Called')
    }, [])
    return(
        <div>
            I am a functional component 
        </div>
    )
}


export default Func; 