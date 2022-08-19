function List({people}) {
    return (
        <>
        {people.map((person)=> {
            // destructuring the object
            const {id, name, age, image} = person;
            return(
                <div className="d-flex" key={id}>
           <div >
            <img src={image} alt="img" height='70' width="70" className="rounded-circle" />
            </div> 
            <div className="m-1 py-1">
                <h5>{name}</h5>
                <p className="lead text-muted">{age}</p>
            </div>
        </div>

            )

        })}
        
        </>
    )
}

export default List;