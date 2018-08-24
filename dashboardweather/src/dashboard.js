import React, { Component } from 'react';
import Menu from './components/Menu';
import ContentViews from './components/ContentViews';
import Header from './components/Header';

import './dashboard.css'



class Dashboard extends Component {
  
  render() {
    return (
      <div className="dashboard">
        <Header/>
        <div className="content">
          <Menu/>
          <ContentViews/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
