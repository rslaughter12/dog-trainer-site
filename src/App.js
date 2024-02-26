import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Banner from './components/Banner';
import WelcomeCard from './components/WelcomeCard';

axios.defaults.baseURL = 'http://localhost:3001';

const App = () => {
  return (
    <div className="App">
<Router>
  <Banner />
  <WelcomeCard />
</Router>
    </div>
  );
};

export default App;
