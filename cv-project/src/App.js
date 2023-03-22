import React, { Component } from 'react';
import General from './components/general-info';
import Education from './components/education-comp/educational-info';
import Experience from './components/experience-comp/experience-info';
import './styles/main-style.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className='mainContent'>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
