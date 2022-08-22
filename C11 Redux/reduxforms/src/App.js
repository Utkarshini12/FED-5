import {Provider} from 'react-redux'
import store from './Store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <UIComponents />
    </Provider>
  );
}

export default App;
