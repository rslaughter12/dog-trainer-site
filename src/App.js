import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Routes from './Routes';
import Copyright from './components/Copyright';

axios.defaults.baseURL = 'http://localhost:3001';

const App = () => {
  return (
    <div className="App">
<Router>
<Routes /> 
<Copyright />
</Router>
    </div>
  );
};

export default App;
