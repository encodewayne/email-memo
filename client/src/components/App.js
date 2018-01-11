import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import EmailForm from './EmailForm';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={EmailForm} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
