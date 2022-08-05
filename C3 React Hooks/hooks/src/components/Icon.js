// if the box is empty ==> pen , if cross => cross icons , if circle => circle icon 
import {FaRegCircle, FaTimes, FaPen} from 'react-icons/fa'

const Icon = ({name}) => {
   switch(name) {
    case "circle" : 
    return <FaRegCircle className='icons' />; 
    case "cross" :
    return <FaTimes className='icons' />
    default : 
    return <FaPen className='icons' />
   
   }
}

export default Icon; 