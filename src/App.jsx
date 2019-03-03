import './App.scss';

import React, { Component } from 'react';

import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar selectedDate={new Date()} height="500px" width="700px" />
      </div>
    );
  }
}

export default App;
