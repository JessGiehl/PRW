import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={styles.container}>
        <h2 style={styles.h2}>Copyright 2018</h2>
      </footer>
    );
  }
}

export default Footer;

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    margin: '0px',
    padding: '2px'
  },
  h2: {
    fontSize: '1.16em',
  }
}
