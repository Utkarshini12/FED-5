import {useAuth0} from '@auth0/auth0-react';

function Login() {
    const {loginWithRedirect} = useAuth0()
    return(
        <div>
            Hi, You can sign Up here!
            <button onClick={()=> loginWithRedirect()}>Log In</button>
        </div>
    )
}

export default Login;