

export default function Child({childToParent}) {
    const cdata = `this is the data from child component to the parent component`

    return (
        <div>
            {/* <h1>{data}</h1> */}
            <button onClick={()=> childToParent(cdata)}>Click on Child</button>
        </div>
    )

}