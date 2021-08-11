import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

export default (props) => {
/*---------styles--------- */
  const styles = StyleSheet.create({
    boxContainer: {
      backgroundColor: '#f2f2f2',
      padding: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  /*----styles-------------- */

  return (
    <View style={styles.boxContainer}>
        {props.children}
    </View>
  )
}
