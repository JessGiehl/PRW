import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import DoneList from './DoneList'
import TodoList from './TodoList'
import TaskForm from './TaskForm'


class Main extends Component {
  //1. Create the state.
  state = {
    todoList: [
    ],
    doneList: [
    ]
  }

  //Use componentDidMount to store the array to localStorage.
  componentDidMount() {
    //check if there are values in local storage
    if(localStorage.getItem('todoList')) {
      //declare a var to read the data as string and then convert to JSON
      let todoList = JSON.parse(localStorage.getItem('todoList'))
      //Updates the state with new var
      this.setState({todoList})
    }
    if(localStorage.getItem('doneList')) {
      //declare a var to read the data as string and then convert to JSON
      let doneList = JSON.parse(localStorage.getItem('doneList'))
      //Updates the state with new var
      this.setState({doneList})
    }
  }

  //Create a function to add the expense and amount to the array. Add validation to the input fields. Use localStorage and reset the form.

  addTask = (task) => {

    const todoList=[...this.state.todoList, { task }]
    this.setState({todoList});

    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  moveTask = key => {
    const todoList = this.state.todoList;
    let item = todoList[key]
    const doneList=[...this.state.doneList, item ]
    this.setState({doneList})
    todoList.splice(key, 1)
    this.setState({todoList})

    localStorage.setItem('todoList', JSON.stringify(todoList))
    localStorage.setItem('doneList', JSON.stringify(doneList))
  }


  removeTask = key => {
    let doneList = this.state.doneList;
    doneList.splice(key, 1)
    this.setState({doneList})
    localStorage.setItem('doneList', JSON.stringify(doneList))
  }


  render() {

    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE TASK LIST COMPONENT. --*/
    let myTasks = this.state.todoList.map((val, key) => {
      //pass through the key and value form the prop component
      return <TodoList val={val} key={key} movMe={() =>this.moveTask(key) } />
    })

    let myDone = this.state.doneList.map((val, key) => {
      //pass through the key and value form the prop component
      return <DoneList val={val} key={key} delMe={() =>this.removeTask(key) } />
    })

    return (
      <div>
        <Header />
        <main style={styles.container}>
        <TaskForm addMe={this.addTask}/>
          <div style={styles.column}>
            <h2 style={styles.center}>To Do</h2>
            <ul style={styles.unordered}>{myTasks}</ul>
          </div>
          <div style={styles.column}>
            <h2>Done</h2>
            <ul style={styles.unordered}>{myDone}</ul>
          </div>
          <div style={styles.clearfix}></div>
        </main>
        <Footer />
      </div>
    )
  }
}



export default Main

const styles = {
  center: {
    textAlign: 'center',
  },
  column: {
    float: 'left',
    margin: '10px',
    width: '40%'
  },
  clearfix: {
    clear: 'both'
  },
  container: {
    padding: '10px',
    flex: 1,
    textAlign: 'center',
    margin: 'none'
  },
  myParagraph:{
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  unordered:{
    listStyleType: 'none',
  }
}
