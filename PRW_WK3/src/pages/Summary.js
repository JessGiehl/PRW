import React, { Component } from 'react'
import ExpenseList from '../components/ExpenseList'
import IncomeList from '../components/IncomeList'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Summary extends Component {

  render() {

    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE EXPENSE LIST COMPONENT. --*/
    let totalExpense = 0;
    let myExpenses = this.props.exList.map((val, key) => {
      //pass through the key and value form the prop component
      return <ExpenseList val={val} key={key} delMe={() =>this.props.removeFromState(key) } />
      totalIncome += this.props.state.exList[key].amount
    })

    let totalIncome = 0;
    let myIncome = this.props.inList.map((val, key) => {
      //pass through the key and value form the prop component
      return <IncomeList val={val} key={key} editMe={() => this.props.toggleState } delMe={() => this.props.removeFromState } />
      totalIncome += this.props.state.inList[key].amount
    })

    return (
      <div>
        <Header breadcrumbs = "Summary"/>
        <main style={styles.container}>
          <div>
          <h2>Current Expenses</h2>
            <ul style={styles.unordered}>
              {myExpenses}
              <li>Total: {totalExpense}</li>
            </ul>
          </div>
          <div>
            <ul style={styles.unordered}>
              {myIncome}
              <li>Total: {totalIncome}</li>
            </ul>
          </div>

        </main>
        <Footer />
      </div>
    )
  }
}

export default Summary

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
