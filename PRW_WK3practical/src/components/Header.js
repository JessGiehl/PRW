import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={styles.container}>
        <h1 style={styles.h1}>TrackIT</h1>
      </header>
    );
  }
}

export default Header;

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '8px',
    margin: '0'
  },
  h1: {
    fontSize: '3em',
  }
}
