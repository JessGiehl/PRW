import React, { Component } from 'react'

class TaskForm extends Component {
  taskRef = React.createRef();

  submitForm = (e) => {
    e.preventDefault();

    let task = this.taskRef.current.value;

    if (task === null || task === ""){
      alert('Please enter a name.')
      return false
    }


    this.props.addMe(task);
    e.target.reset();
    console.log(e.target)
    console.log(e.currentTarget)
  }

  render() {
    return (
      <form onSubmit= {this.submitForm} style={styles.container}>
        <input ref={this.taskRef} style={styles.spacer} type="text" placeholder="Add task..."/>
        <button type="submit">+ Add Todo</button>
      </form>
    )
  }
}

export default TaskForm

const styles = {
  container: {
    margin: '5px'
  },
  spacer: {
    marginRight: '5px'
  }
}
