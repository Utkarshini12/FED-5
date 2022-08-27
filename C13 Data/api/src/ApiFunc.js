import {useEffect} from 'react'; 

function ApiFunc() {

    useEffect(()=> {
        const requestOptions= {
            method: "POST", 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify({name: "Utkarshini Arora"})
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))

    }, [])
    return(
        <div>
          <h1> Data Retrival Using FUnctional Component</h1> 
        </div>
    )
}

export default ApiFunc;