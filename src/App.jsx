import React, { Component } from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar selectedDate={new Date()} useShortMonth={false} />
      </div>
    );
  }
}

export default App;
