import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import EmailForm from './EmailForm';
import Result from './Result';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={EmailForm} />
              <Route exact path="/result" component={Result} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
