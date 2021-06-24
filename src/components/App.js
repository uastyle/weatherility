import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './main/reducers/rootReducer';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';
import './scss/app.scss';

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    );
  }
}

export default App;