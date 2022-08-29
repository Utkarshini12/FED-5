import {useState} from 'react'; 
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';

function Home() {

    const [query, setQuery] = useState(''); 
    const [cards, setCards] = useState([]);

    console.log(query);

    const handleSubmit = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => console.log(res))
    }


    return(
        <div className='bg-dark text-white vh-100 p-2 d-flex justify-content-center'>
            <div>

            
            <h1>Google Books</h1>
        <div className="input-group">
            <input 
            value={query}
            onChange={e=> setQuery(e.target.value)}
            type="text" 
            className='form-control' /> <button className='btn btn-primary' onClick={handleSubmit}><FaSearch /></button>
        </div>
        </div>
        </div>
    )
}

export default Home;