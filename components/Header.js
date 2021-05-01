import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>LAZY ALARM</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#a32cc4',
    borderWidth:10,
    borderColor:'#710193'
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
});