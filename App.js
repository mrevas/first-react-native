import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import Button from './src/components/Button';
import Box from './src/components/Box';

export default function App() {
  const [name, setName] = useState('');

  function handleInputChange (text) {
    setName(text)
  }

  return (
    <View style={styles.appContainer} >
      <Box>
        <Text style={styles.label}>First Name</Text>
        <TextInput onChangeText={handleInputChange} value={name} style={styles.textInput}></TextInput>
        <Text style={styles.h1}>{name}</Text>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  label: {
    color: 'black',
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    width: 200,
    fontSize: 18
  },
  h1: {
    fontSize: 40
  }
})