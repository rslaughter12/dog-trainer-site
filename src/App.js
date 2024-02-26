import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';

axios.defaults.baseURL = 'http://localhost:3001';

const App = () => {
  return (
    <div className="App">
<Router>
  <Navbar />
</Router>
    </div>
  );
};

export default App;
