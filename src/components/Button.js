import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default (props) => {
/*---------styles--------- */
  const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.bgColor,
      padding: 20,
      borderRadius: 5,
      marginBottom: 10
    },
    title: {
      color: 'black'
    }
  })
  /*----styles-------------- */

  return (
    <TouchableHighlight onPress={() => {
      alert('You Clicked Me! Thank You.')
    }}>
      <View style={styles.buttonContainer}>
          <Text style={styles.title}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  )
}
