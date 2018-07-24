import React, { Component } from 'react';
import Expenses from '../pages/Expenses'
import Income from '../pages/Income'
import Summary from '../pages/Summary'

//React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Main extends Component {

  state = {
    inList: [
      {
        // income:'Work Wages',
        // amount:'375.00',
        // isEditing: false
      }
    ],
    exList: [
      {
        // expense:'Rent',
        // amount:'440.00'
      }
    ]
  }

  componentDidMount() {
    //check if there are values in local storage
    if(localStorage.getItem('exList')) {
      //declare a var to read the data as string and then convert to JSON
      let exList = JSON.parse(localStorage.getItem('exList'))
      //Updates the state with new var
      this.setState({exList: exList})
    }
    if(localStorage.getItem('inList')) {
      //declare a var to read the data as string and then convert to JSON
      let inList = JSON.parse(localStorage.getItem('inList'))
      //Updates the state with new var
      this.setState({inList: inList})
    }
  }

  //pass an object up from a form component and update the state
  addToState = (item, type) => {
    if (type == 'expense'){
      const exList=[...this.state.exList, { item }]
      this.setState({exList});

      localStorage.setItem('exList', JSON.stringify(exList))
    } else {
      const inList=[...this.state.inList, { item }]
      this.setState({inList});

      localStorage.setItem('inList', JSON.stringify(inList))
    }
  }

  deleteFromState = (key, type) => {
    if (type == 'expense'){
      let exList = this.state.exList;
      exList.splice(key, 1)
      this.setState({exList})
      localStorage.setItem('exList', JSON.stringify(exList))
    } else {
      let inList = this.state.inList;
      inList.splice(key, 1)
      this.setState({inList})
      localStorage.setItem('inList', JSON.stringify(inList))
    }
  }

  toggleState = () => {
    const { isEditing } = this.state;
    this.setState({isEditing:!isEditing})
    console.log(this.state)
  }


  render(){
    return(
    <div>
      <Route path='/' render={(props) => <Summary {...props} inList={this.state.inList} exList={this.state.exList} />}/>
      <Route path='/Summary' render={(props) => <Summary {...props} inList={this.state.inList} exList={this.state.exList} />}/>
      <Route path='/Expenses' render={(props) => <Expenses {...props} exList={this.state.exList} addToState={this.addToState} toggleState={this.toggleState}  />}/>
      <Route path='/Income' render={(props) => <Income {...props} inList={this.state.inList} addToState={this.addToState} toggleState={this.toggleState}  />}/>
     // <Route exact path='/Summary' component={ Summary } inList={this.state.inList} exList={this.state.exList} />
     // <Route exact path='/Expenses' component={ Expenses } exList={this.state.exList} addToState={this.addToState} toggleState={this.toggleState} />
     // <Route exact path='/Income' component={ Income } inList={this.state.inList} deleteFromState={this.deleteFromState} toggleState={this.toggleState} />
    </div>
  )
 }
}

export default Main;
