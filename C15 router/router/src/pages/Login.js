import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className="bg-black vh-100 d-flex justify-content-center align-items-center">
            <div className="">
                <div className="card bg-dark p-5">

                    <input type="text" className="form-control m-1" /> <br />
                    <input type="text" className="form-control m-1" /> <br />
                    <Link to="/product"><button className="btn btn-danger">Submit</button></Link>
                    

                </div>
            </div>
        </div>
    )
}

export default Login;