import {useRef, useEffect, useState} from 'react'; 


function Refs() {
      
    // const textEle = document.getElementById("textElement")
    // id == textElement
    // const === textEle

    const textElement = useRef(); 

    // grab teh button element and change the text to clicked 
   

    useEffect(()=> {
        console.log(textElement.current.innerText);

        textElement.current.innerText = "Super fast Reloading..."

    })
    return (
        <div>
            <h1>Advance Hooks </h1>
            <h3 ref={textElement}>Loading...</h3>
            <button>Click Me</button>
        </div>
    )
}

export default Refs; 