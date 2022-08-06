// start with the prefiix use 
// it can use other hooks from react 
// custom hooks should also be called on the top level


// fetch the api => add a url => .then .catch store the data 

import {useState, useEffect} from 'react'


// generic 
const useFetchData = (url) => {

    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then((data)=> setData(data))
    })

    return data; 

}

const CustomHook = () => {
    // https://dog.ceo/api/breeds/image/random

    const dogData = useFetchData("https://dog.ceo/api/breeds/image/random")
    console.log(dogData)

    return (
        <div>I am using cutom hooks

            <img src={dogData.message} height='100' width = '100' />
        </div>
    )

}


export default CustomHook;


