
import React, { Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
import ReactDOM from 'react-dom';
import DateTimePicker from './component/DateTimePicker';

import axios from 'axios';

class App extends Component {

  constructor () {
    super();
  }


render(){
  return (
    <div className="App">
        <div className='container'>
          <h1> Select Date To Add</h1>

          <DateTimePicker />

          <List />


        </div>


    </div>
  );
  }
}

export default App;
