import React, { Component } from 'react';

import Header from './components/header'
import Footer from './components/footer'
import RouterIndex from './router/index'
import './views/index.css';
class App extends Component {
  render() {
    return (
      <div className="pageWrap">
        <Header></Header>
        <div className="main">
          <RouterIndex />
        </div>
        
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
