import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    );
  }
}

export default App;
