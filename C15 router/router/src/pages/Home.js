import {Link} from 'react-router-dom'

function Home() {
    return(
        <div className="bg-black vh-100">
            <div className="d-flex justify-content-between px-5 py-4">
                <h1 className="text-danger">LOGO-REDEFINED</h1>
                <Link to="/login"><button className="btn btn-secondary px-5">Login</button></Link>
            </div>
        </div>
    )
}

export default Home;