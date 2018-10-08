import React, { Component } from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: "http://localhost:3000"
})

import Header from './Header';
import Post from './Post';
import { ApolloProvider } from 'react-apollo';

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <section className="App-main">
          <Post />
        </section>
      </div>;
    </ApolloProvider >
  );
 };
};

export default App;
