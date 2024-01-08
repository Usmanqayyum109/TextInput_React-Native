import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

const Selection = () => {
  const [inputValue, setInputValue] = useState('');
  const [selection, setSelection] = useState({start: 0, end: 0});

  const handleSelectionChange = event => {
    setSelection(event.nativeEvent.selection);
  };
  const handleSetSelection = () => {
    // Set the selection to a specific range (e.g., 5th to 10th characters)
    setSelection({start: 0, end: 5});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Selection</Text>
      <TextInput
        value={inputValue}
        placeholder="Type something..."
        onSelectionChange={handleSelectionChange}
        selection={selection}
        onChangeText={setInputValue}
        selectionColor={'red'}
        style={styles.input}
      />

      <Button title="Set Selection" onPress={handleSetSelection} />
      {/* Add more content here */}
    </View>
  );
};

export default Selection;

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
