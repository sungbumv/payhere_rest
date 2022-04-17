  /* eslint-disable  */
import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import IndexPage from './components/page/IndexPage';


class App extends Component
{
  render() {
    return (
      <div className='App'>
           <Header/>
           <IndexPage/>
           <Footer/>
      </div>
    );
  }
}
export default App;
