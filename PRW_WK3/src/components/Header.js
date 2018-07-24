import React, { Component } from 'react';
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header style={style.container}>
        <h1>Finance Tracker</h1>
        <h2 style={style.h2}>{this.props.breadcrumbs}</h2>
        <Navbar />
      </header>
    );
  }
}

export default Header;

const style = {
  container: {
    backgroundColor: 'black',
    color: 'white',
  },
  h2: {
    fontSize: '1.16em',
  }
}
