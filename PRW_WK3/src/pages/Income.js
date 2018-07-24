import React, { Component } from 'react'
import IncomeList from '../components/IncomeList'
import IncomeForm from '../components/IncomeForm'
import AddButton from 'react-icons/lib/fa/plus'
import Header from '../components/Header'
import Footer from '../components/Footer'


//Goal:  Create a bills application
//It should have a form with two inputs for the name and amount.
//Display items in a list.
//Delete the items from the list.
//Use localStorage to store the items to the list.

class Income extends Component {

  render() {
    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE Income LIST COMPONENT. --*/
    let myIncomes = this.props.inList.map((val, key) => {
      //pass through the key and value form the prop component
      return <IncomeList val={val} key={key} editMe={() => this.props.toggleState } delMe={() => this.props.removeFromState } />
    })
    return (
      <div>
        <Header breadcrumbs = "Income"/>
        <main style={styles.container}>
          <h2>Add new income</h2>
          <IncomeForm addToState={this.props.addToState}/>
          <h2>Current Incomes</h2>
          <ul style={styles.unordered}>{myIncomes}</ul>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Income

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
