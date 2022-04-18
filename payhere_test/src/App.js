  /* eslint-disable  */
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import Contents from './components/Contents';

class App extends Component
{
  render() {
    return (
      <div className='App'>
           <Header/>
           <Contents/>
           <Footer/>
      </div>
    );
  }
}
export default App;
