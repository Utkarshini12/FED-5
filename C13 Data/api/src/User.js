import {useEffect, useState} from 'react';  

function User() {

    const [data, setData] = useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    console.log("***", data)

    return (
        <div className='row '>
            {data.map((item)=> (
                <div className="col-3" key={item.id}>
                    <div className="card m-1">
                        <div className="card-title">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="card-body">
                            Username : {item.username}
                            <br />
                            Phone: {item.phone}
                            <br />
                            Website : {item.website }
                            <br />
                            <p className="lead fw-bold">{item.company.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default User;