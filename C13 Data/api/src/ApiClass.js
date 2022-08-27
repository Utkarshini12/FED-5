import { Component } from 'react';
class ApiClass extends Component {
    constructor(props) {
        super(props)
    }
    // https://reqres.in/api/posts
    componentDidMount() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "Utkarshini" }),
        }

        // fetching any api : it should definetely give you some response :  promises 
        fetch("https://reqres.in/api/posts", requestOptions)
            .then((response) => response.json())
            .then(data => console.log(data))

    }
    render() {
        return (
            <div>
                <h1>Data Retrival in React</h1>
            </div>
        )
    }

}

export default ApiClass;