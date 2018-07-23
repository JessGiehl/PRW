import React, { Component } from 'react'
import Arrow from 'react-icons/lib/fa/arrow-right';

class TodoList extends Component {
  render() {
    return (
      //*--1. Create a list with an id.  The list will need to contain the placeholders for the expense and amount --*/
      <li style={styles.listItem} key={this.props.id} className="list">
        <span style={styles.listPart}>{ this.props.val.task }</span>
        <button style={styles.smllTxt} onClick={this.props.movMe}><Arrow /></button>
      </li>
    )
  }
}

export default TodoList

const styles = {
  smllTxt: {
    color: 'rgb(0, 138, 34)',
    fontSize: '20px',
    background: 'none',
    border: 'none'
  },
  listPart: {
    marginLeft: '10px'
  },
  listItem: {
    marginBottom: '5px'
  }
}
