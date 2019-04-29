import React, { Component } from 'react';//import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;