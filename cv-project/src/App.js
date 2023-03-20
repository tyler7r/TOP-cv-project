import React, { Component } from 'react';
import General from './components/general-info';

class App extends Component {
  constructor() {
    super();

    this.state = '';
  }

  render() {
    return (
      <div>
        <General />
      </div>
    );
  }
}

export default App;
