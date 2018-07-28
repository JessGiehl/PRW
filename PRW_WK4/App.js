import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button, AsyncStorage } from 'react-native';
import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default class App extends React.Component {

  state = {
    todoList: [
    ]
  }

  componentDidMount() {
    //check if there are values in local storage
    if(AsyncStorage.getItem('todoList')) {
      //declare a var to read the data as string and then convert to JSON
      let todoList = JSON.parse(AsyncStorage.getItem('todoList'))
      //Updates the state with new var
      this.setState({todoList})
    }
  }

  addTask = (task) => {
    this.setState({todoList: task});
    AsyncStorage.setItem('todoList', JSON.stringify(doneList))
  }

  removeTask = key => {
    let todoList = this.state.todoList;
    todoList.splice(key, 1)
    this.setState({todoList})
    AsyncStorage.setItem('todoList', JSON.stringify(doneList))
  }

  render() {

    /*--CREATE A VARIABLE TO MAP THROUGH THE ARRAY.  RETURN THE TASK LIST COMPONENT. --*/
    let myTasks = this.state.todoList.map((val, key) => {
      //pass through the key and value form the prop component
      return <TaskList val={val} key={key} delMe={() =>this.removeTask(key) } />
    })

    return (
      <View style={styles.container}>
        <Header />
        <TaskForm />
        <ScrollView>
          { myTasks }
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: 150
  }
});
