
import './App.css';
import Sidebar from './Sidebar';
import {AppProvider} from './Context'

function App() {
  return (
    <AppProvider>
     <Sidebar />
    </AppProvider>
  );
}

export default App;
