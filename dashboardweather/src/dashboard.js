import React, { Component } from 'react';
import Menu from './components/Menu';
import contentViews from './components/contentViews';
import Header from './components/Header';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header/>
        <div>
        <Menu/>
        <contentViews/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
