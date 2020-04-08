import React from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
