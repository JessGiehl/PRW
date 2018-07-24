import React, { Component } from 'react'

class ExpenseForm extends Component {
  expenseRef = React.createRef();
  amountRef = React.createRef();

  submitForm = (e) => {
    e.preventDefault();

    let expense = this.expenseRef.current.value;
    let amount = this.amountRef.current.value;

    if  (expense === null || expense === ""){
      alert('Please enter an expense.')
      return false
    }

    if  (amount !== isNaN || amount === "" || amount === null){
      alert('Please enter an amount.')
      return false
    }

    this.props.addToState({expense: expense, amount: amount}, expense);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit= {this.submitForm} style={styles.container}>
        <label style={styles.spacer}>Expense</label>
        <input ref={this.expenseRef} type="text" style={styles.spacer}/>
        <label style={styles.spacer}>amount</label>
        <input ref={this.amountRef} type="text" style={styles.spacer}/>
        <button type="submit"> + Add Expense </button>
      </form>
    )
  }
}

export default ExpenseForm

const styles = {
  container: {
    margin: '5px'
  },
  spacer: {
    marginRight: '5px'
  }
}
