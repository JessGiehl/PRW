import React, { Component } from 'react'
import ExpenseList from '../components/ExpenseList'
import AddButton from 'react-icons/lib/fa/plus'


//Goal:  Create a bills application
//It should have a form with two inputs for the name and amount.
//Display items in a list.
//Delete the items from the list.
//Use localStorage to store the items to the list.

class Main extends Component {
  //1. Create the state.
state = {
  exList: [
    {
      expense:'Rent',
      amount:'440.00'
    }
  ],
}

  //Use componentDidMount to store the array to localStorage.
  componentDidMount() {
    //check if there are values in local storage
    if(localStorage.getItem('exList')) {
      //declare a var to read the data as string and then convert to JSON
      let exList = JSON.parse(localStorage.getItem('exList'))
      //Updates the state with new var
      this.setState({exList: exList})
    }
  }

  //Create functions to store the value of the input boxes

  changeExpense = e => {
    this.setState({expense: e.target.value})
  }

  changeAmount = e => {
    let newAmount = e.target.value
    newAmount = parseFloat(newAmount).toFixed(2)
    this.setState({amount: newAmount})
  }

  //Create a function to add the expense and amount to the array. Add validation to the input fields. Use localStorage and reset the form.

  addExpense = e => {
    e.preventDefault()

    //data binding
    let exList = this.state.exList
    //form validation
    if (this.state.expense === null || this.state.expense === ""){
      alert('Please enter a name.')
      return false
    }
    if (this.state.amount === null || this.state.amount === ""){
      alert('Please enter a valid amount.')
      return false
    }
    if(isNaN(this.state.amount)) {
      alert('Amount must be a number.')
      return false
    }
    //push the values for expense and amount to the current exList
    this.state.exList.push({'expense':this.state.expense, 'amount':this.state.amount})
    this.setState({exList: this.state.exList})
    localStorage.setItem('exList', JSON.stringify(exList))
    //reset the form
    e.target.reset()
    //reset the state
    this.setState({'expense':''});
    this.setState({'amount':''})
  }

  //8. Create a function to delete the appropriate list item. Update localStorage.
  removeExpense = key => {
    //create reference to state
    let exList = this.state.ExpenseList
    //splice out value in state array using unique id
    this.state.exList.splice(key, 1)
    //update the state with the new array
    this.setState({exList: this.state.exList})
    //update local storage
    localStorage.setItem('exList', JSON.stringify(exList))
  }


  render() {
    //The Map object holds key-value pairs.
    //Objects & Maps set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.

    //Syntax- array.map(function(currentValue, index, arr), thisValue)
    //currentValue-Required. The value of the current element
    //index	Optional-The array index of the current element
    //arr	Optional-The array object the current element belongs to

    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE EXPENSE LIST COMPONENT. --*/
    let myExpenses = this.state.exList.map((val, key) => {
      //pass through the key and value form the prop component
      return <ExpenseList val={val} key={key} delMe={() =>this.removeExpense(key) } />
    })

    return (
      <main style={styles.container}>
        <section>
          <h2>Add new expense</h2>
          <form onSubmit={this.addExpense}>
            <p>
              <label>Expense </label>
              <input type="text" name="expense" onChange={this.changeExpense}/>
              <label style={styles.label}>Amount </label>
              <input type="text" name="amount" onChange={this.changeAmount}/>
              <button style={styles.smllTxt} type="submit"><AddButton /></button>
            </p>
          </form>
        </section>

        <section>
          <h2>Current Expenses</h2>
          <article>
            <ul style={styles.unordered}>{myExpenses}</ul>
          </article>
        </section>
      </main>
    )
  }
}

export default Main

const styles = {
  container: {
    padding: '5px',
    backgroundColor: 'rgba(143, 200, 241, 1)',
    flex: 1,
    textAlign: 'center'
  },
  myParagraph:{
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  unordered:{
    listStyleType: 'none',
  },
  smllTxt: {
    color: 'green',
    fontSize: '20px',
    background: 'none',
    border: 'none'
  },
  label: {
    marginLeft: '10px'
  }
}
