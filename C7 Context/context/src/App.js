import './App.css';
import Props from './concepts/Props';
import Example from './concepts/PropsExample';
import Agent from './Context/Consumer';
import AgentBond from './Context/Consumer';
import Provider from './Context/Provider';


function App() {
  return (
    <div className="App">
      <Props name="Utkarshini" />
      <Example />
      <Provider>
      <AgentBond />
      </Provider>
    
    </div>
  );
}

export default App;
