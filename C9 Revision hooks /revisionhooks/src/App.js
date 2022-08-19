import { useState } from 'react';

import List from './List';
import data from './data'; // array of objs 


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Parent COmponent : data 
//Child component  pass this data tp list component 
// craete a common componnet of List Item -> accept props => map through the list 
function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="bg-info vh-100 d-flex justify-content-center align-items-center">

      <div className="card shadow-lg p-2" style={{width: '20' + 'rem', height: '33' + 'rem'}}>
        <div className="card-title"> <h3>{people.length} birthdays Today</h3> </div>
        <div className="card-body">
          <List people={people}  />
          <button className='btn btn-info form-control' onClick={()=> setPeople([])}>Clear All</button>
        </div>
      
      </div>
     
    </div>
  );
}

export default App;
