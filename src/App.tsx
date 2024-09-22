import React from 'react';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import './styles/App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Sections />
      </Provider>
    </div>
  );
};

export default App;
