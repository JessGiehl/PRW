import React, { Component } from 'react';
//React Router
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="">
        <NavLink to="/Summary">Home </NavLink>
        <NavLink to="/Expenses">Expenses </NavLink>
        <NavLink to="/Income">Income </NavLink>
      </nav>
    );
  }
}

export default NavBar;

const style = {
  container: {
    backgroundColor: 'black',
    color: 'white',
  },
  h2: {
    fontSize: '1.16em',
  }
}
