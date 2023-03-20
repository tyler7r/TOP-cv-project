import React, { Component } from 'react';
import General from './components/general-info';
import Education from './components/educational-info';
import Experience from './components/experience-info';

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  changeState = (name, email, phone) => {
    this.setState({
      general: {
        name: name,
        email: email,
        phone: phone,
      }
    })
  }

  render() {
    const { general } = this.state;
    return (
      <div>
        <General general={general}/>
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
