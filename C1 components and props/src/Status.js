function Status(props) {
    let message; 
    // dynamic values of props 
    if(props.status === "loading") {
        message = "Loading.. Please Wait..."
    } else if(props.status === "success") {
        message = "Data loaded successfully! Scroll down to have a look!"
    } else if(props.status === "error") {
        message = "Error loading data"
    } else {
        message = "Invalid props"
    }
    return (
        <div>
            <h2 className="text-info">
                {/* Conditionally printing a message depening on the dynamic value of props */}
                Status  - {message}
            </h2>
        </div>
    )
}

export default Status; 