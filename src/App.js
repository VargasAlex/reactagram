import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
