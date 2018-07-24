import React, { Component } from 'react'
import ExpenseList from '../components/ExpenseList'
import AddButton from 'react-icons/lib/fa/plus'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExpenseForm from '../components/ExpenseForm'


//Goal:  Create a bills application
//It should have a form with two inputs for the name and amount.
//Display items in a list.
//Delete the items from the list.
//Use localStorage to store the items to the list.

class Expenses extends Component {

  render() {

    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE EXPENSE LIST COMPONENT. --*/
    let myExpenses = this.props.exList.map((val, key) => {
      //pass through the key and value form the prop component
      return <ExpenseList val={val} key={key} delMe={() =>this.props.removeFromState(key) } />
    })

    return (
      <div>
        <Header breadcrumbs = "Expenses"/>
        <main style={styles.container}>
          <h2>Add new expense</h2>
          <ExpenseForm addToState={this.props.addToState}/>
          <h2>Current Expenses</h2>
          <ul style={styles.unordered}>{myExpenses}</ul>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Expenses

const styles = {
  container: {
    padding: '5px',
    backgroundColor: 'rgba(143, 200, 241, 1)',
    flex: 1,
    textAlign: 'center'
  },
  unordered:{
    listStyleType: 'none',
  }
}
