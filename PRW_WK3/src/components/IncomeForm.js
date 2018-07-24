import React, { Component } from 'react'

class IncomeForm extends Component {
  incomeRef = React.createRef();
  amountRef = React.createRef();

  submitForm = (e) => {
    e.preventDefault();

    let income = this.incomeRef.current.value;
    let amount = this.amountRef.current.value;

    if  (income === null || income === ""){
      alert('Please enter an income.')
      return false
    }

    if  (amount !== isNaN || amount === "" || amount === null){
      alert('Please enter an amount.')
      return false
    }

    this.props.addToState({income: income, amount: amount, isEditing: false}, income);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit= {this.submitForm} style={styles.container}>
        <label style={styles.spacer}>Income</label>
        <input ref={this.incomeRef} type="text" style={styles.spacer}/>
        <label style={styles.spacer}>amount</label>
        <input ref={this.amountRef} type="text" style={styles.spacer}/>
        <button type="submit"> + Add Income </button>
      </form>
    )
  }
}

export default IncomeForm

const styles = {
  container: {
    margin: '5px'
  },
  spacer: {
    marginRight: '5px'
  }
}
