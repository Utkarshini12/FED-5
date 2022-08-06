import {useState, createContext, useContext} from 'react'

// create, provider, consumer

// 1. Create a context where we can store the values 

const UserContext = createContext(null); 

// 3. consmer -> this component will consume the values from context

const UserInfo = () => {

    const user = useContext(UserContext); 


    return (
        <div>
          <h1>Got the value from context : {user }</h1> 
        </div>
    )

}

// 2. Provider -> This react component will provide the values 

function Login() {
    const [user, setUser] = useState(null); 
    const [email, setEmail] = useState(null); 
    const [password, setPassword] = useState(null); 

    return (
        // providing user value to the usercontext 
        <UserContext.Provider value={user}>
        <div>
            <button onClick={()=> setUser('Utkarshini')}>Log In </button>
            <UserInfo />
          
        </div>
        </UserContext.Provider>
    )

}

export default Login; 
