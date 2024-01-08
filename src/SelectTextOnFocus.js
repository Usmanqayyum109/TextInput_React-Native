import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const SelectTextOnFocus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SelectTextOnFocus</Text>
      <TextInput
        selectTextOnFocus={true}
        placeholder="Type something..."
        style={styles.input}
        multiline={true}
      />
    </View>
  );
};

export default SelectTextOnFocus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: 'gray',
  },
  heading: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 50,
    fontWeight: '700',
  },
});
