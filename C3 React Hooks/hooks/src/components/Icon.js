// if the box is empty ==> pen , if cross => cross icons , if circle => circle icon 
import {FaRegCircle, FaTimes, FaPen} from 'react-icons/fa'

const Icon = (props) => {
   switch(props.name) {
    case "circle" : 
    return <FaRegCircle className='icons' />
   
   }
}