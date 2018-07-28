import React from 'react';
import { StyleSheet, Text, View, Button, Form } from 'react-native';

class TaskForm extends React.Component {

  handleSubmit = () => {

    const value = this._form.getValue(); // use that ref to get the form value

    if (value === null || value === ""){
      alert.alert('Please enter a name.')
      return false
    }

    this.props.addTask(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          style={styles.input}
          ref={c => this._form = c} // assign a ref
          placeholder = "Insert task..."
          type={User}
        />
        <Button
          title= "+ Add Task"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default TaskForm

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
