import React, { Component } from 'react';
import General from './components/general-info';
import Education from './components/education-comp/educational-info';
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
    return (
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
