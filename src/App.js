import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Routes from './Routes';


axios.defaults.baseURL = 'http://localhost:3001';

const App = () => {
  return (
    <div className="App">
<Router>
<Routes /> 
</Router>
    </div>
  );
};

export default App;
