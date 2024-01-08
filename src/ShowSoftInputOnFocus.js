import React from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

const ShowSoftInputOnFocus = () => {
  const handleFocusTextInput = () => {
    // Programmatically set focus to the TextInput
    // when the "Focus TextInput" button is pressed
    textInputRef.focus();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ShowSoftInputOnFocus</Text>
      <TextInput
        placeholder="Type something..."
        style={styles.input}
        showSoftInputOnFocus={false}
        ref={ref => (textInputRef = ref)}
      />

      <Button title="Focus TextInput" onPress={handleFocusTextInput} />
    </View>
  );
};

export default ShowSoftInputOnFocus;

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
