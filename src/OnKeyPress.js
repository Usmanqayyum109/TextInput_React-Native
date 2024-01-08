import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

export const OnKeyPress = () => {
  const [typedText, setTypedText] = useState('');

  const handleKeyPress = event => {
    const {key} = event.nativeEvent;
    setTypedText(prevText => prevText + key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>onKeyPress</Text>
      <TextInput
        style={styles.input}
        onKeyPress={handleKeyPress}
        placeholder="Type here"
      />
      <Text>Typed Text: {typedText}</Text>
    </View>
  );
};

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
