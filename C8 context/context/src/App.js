import View from "./redux/UI/View"
import Controls from "./redux/UI/Controls";
import { Provider } from "react-redux";
import Parent from './components/Parent';
import { store } from "./redux/store";
import './App.css';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Parent />
    <View />
    <Controls />

    </div>
    </Provider>
  );
}

export default App;
