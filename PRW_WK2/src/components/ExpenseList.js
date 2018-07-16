import React, { Component } from 'react'
import FaDelete from 'react-icons/lib/fa/trash';

class ExpenseList extends Component {
  render() {
    return (
      //*--1. Create a list with an id.  The list will need to contain the placeholders for the expense and amount --*/
      <li style={styles.listItem} key={this.props.id} className="list">
        <span style={styles.listPart}>{ this.props.val.expense }</span>
        <span style={styles.listPart}>${ this.props.val.amount }</span>
        <button style={styles.smllTxt} onClick={this.props.delMe}><FaDelete /></button>
      </li>
    )
  }
}

export default ExpenseList

const styles = {
  smllTxt: {
    color: 'rgb(138, 0, 0)',
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
