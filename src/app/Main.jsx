import React, { Component } from 'react';
import Header from './partials/Header.jsx';
import Footer from './partials/Footer.jsx';
import Tablereport from './table/Tablereport.jsx';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">        
          <div className="container">
            <Tablereport />
          </div>
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default Main;
