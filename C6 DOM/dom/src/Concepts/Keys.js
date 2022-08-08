function Key() {
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number, id) => {
        return (
            <li key={id}>{number * 2}</li>
        )
    })

    const arr = [{name: "Utkarshini", age: "24"}, {name: "Rambo", age: "1.5"}]

    // Types of functions 

    // function 
    // const func () => {}
    // () => { return ()}
    // () => ()

    return (
        <div>
            {listItems}
            
        </div>
    )

}

export default Key;