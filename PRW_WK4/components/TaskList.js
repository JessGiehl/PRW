import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TaskList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.val}</Text>
        <Button>
        onPress = {this.props.delMe}
        </Button>
      </View>
    );
  }
}

export default TaskList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
