import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='logo'></div>
        <div className='info'><select>
          <option value='Santa Cruz'>Santa Cruz</option>
          <option value='La Paz'>La Paz</option>
          <option value='Cochabamba'>Cochabamba</option>
          <option value='Trinidad'>Trinidad</option>
          <option value='Potosi'>Potosi</option>
          <option value='Cobija'>Cobija</option>
          <option value='Tarija'>Tarija</option>
          <option value='Sucre'>Sucre</option>
          <option value='Oruro'>Oruro</option>
        </select></div>
      </div>
    );
  }
}

export default Header;
