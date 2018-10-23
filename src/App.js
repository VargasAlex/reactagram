import React from 'react';
import './App.css';

import Header from './Header';
import Posts from './Posts';

import Pusher from 'pusher-js';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


class App extends Component {
  constructor() {
    super();
    // connect to pusher
    this.pusher = new Pusher("PUSHER_APP_KEY", {
      cluster: 'eu',
      encrypted: true
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            {/* pass the pusher object and apollo to the posts component */}
            <Posts pusher={this.pusher} apollo_client={client} />
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
