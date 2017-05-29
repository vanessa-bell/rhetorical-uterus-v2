import React, { Component } from 'react';
import Header from './components/Header';
import IntroBubble from './components/IntroBubble';
import DebateBlurb from './components/DebateBlurb';
import Stances from './components/Stances';
import NewsHome from './components/NewsHome';
import Footer from './components/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <IntroBubble />
          <DebateBlurb />
          <Stances />
          <NewsHome />
          <Footer />
        </div>
    );
  }
}

export default App;
