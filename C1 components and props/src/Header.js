function Header(props) {
    return (
        <div className="d-flex">
            <h1>
                Header 
            </h1>
            <button>{props.IsUser}</button>
             </div>
    )
}

// header should have IsUser == Login/Signup/Logout

export default Header;