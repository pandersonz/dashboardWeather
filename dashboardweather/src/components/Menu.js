import React, { Component } from 'react';
import 'Menu.css';


class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className='buttom'>Home</div>
        <div className='buttom'>Report</div>
        <div className='buttom'>About Us</div>
      </div>
    );
  }
}

export default Menu;
