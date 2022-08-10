import MiContext from './Context'; 


const Agent = () => {
    return <AgentBond />
}
// react component
const AgentBond = () => {
    return (
        // the component has become a consumer 
        <MiContext.Consumer>
            
                {(context)=> {
                    console.log(context.data)
                    return (
                    <div>
                        <h3 className='text-danger'>Welcome MI, Agent</h3>
                        <div className="card" style={{width: 18 + 'rem'}}>
                            <div className="card-header bg-danger text-white">
                                URGENT
                            </div>
                            <div className="card-body">
                                <h5 className='card-title'> {context.data.mname}</h5>
                                <p className='lead display 6'>For : {context.data.agent}</p>
                                <h5 className='fw-bolder btn-danger'>STATUS : {context.data.accept}</h5>

                                <button className='btn btn-danger' onClick={context.isMissionAccepted}>Choose to Accept</button>
                            </div>
                        </div>
                       
                        {/* print the not accepted  */}
                        {/* Craete a button, when the agents clixks on it the text changes to mission accepted  */}

                    </div> )
                 } }
            
        </MiContext.Consumer>
    )
}


export default Agent; 