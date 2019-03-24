import React, { Component } from 'react';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

class App extends Component {
  render() {
    return (
      // <LinkList />
      <CreateLink />
    );
  }
}

export default App;
