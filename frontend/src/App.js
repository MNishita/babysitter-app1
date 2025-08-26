import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import BabysitterForm from './components/BabysitterForm';
import BabysitterList from './components/BabysitterList';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <BabysitterForm />
      <BabysitterList />
    </div>
  );
}

export default App;
