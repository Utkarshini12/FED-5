import ClassComp from './Class';
import Func from './Func'
import FuncWithArrow from './Func';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import Status from './Status';

function App() {
  
  return (
    <div className="App">
      {/* Calling the header component which is dynamically reusable */}
      <Header IsUser="Login" />
      <Header IsUser="Signup" />
      <Header IsUser="Logout" />

      <ClassComp />
      <Func />
      <FuncWithArrow />
      <Status status="error" />
     
      {/* <Welcome IsUser = "Login" /> */}
 
      {/* // <input type="text" */}



    </div>
  );
}

export default App;


// React : Virtual DOM
// COmponents : Reusable : DRY
// Components are also dynamically reusable with the help props 
// DYnamically render components based on conditions 
