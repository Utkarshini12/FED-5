import { useEffect } from "react"

function Effect() {
    const data = {a : 1}

//    useEffect(()=> {
//     fetch() ==> data
//    }, [data])

    return (
        <div>
            {data.a}
        </div>
    )
}