import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Email-Memo
          </a>
        </div>
      </nav>
    );
  }
}
