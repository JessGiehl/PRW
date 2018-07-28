import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TaskMaster</Text>
      </View>
    );
  }
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
