import Component from './Component'

const CustomComponent = () => {
    new Promise((resolve, reject) => setTimeout(()=> resolve(import('./Component')), 100))


}

const CustomComponent2 = () => {
    new Promise((resolve, reject)=> 
    setTimeout(()=> resolve(import('./Component')), 5000))
}


function Lazy() {
    return(
        <div>
           <CustomComponent label="Label 1" />
           <CustomComponent2 label="Label 2" />
           

        </div>
    )
}

export default Lazy;