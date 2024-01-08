import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const OnSelectionChange = () => {
  const handleSelectionChange = event => {
    const {start, end} = event.nativeEvent.selection;
    console.log(`Selection changed: start=${start}, end=${end}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>onSelectionChange</Text>
      <TextInput
        placeholder="Type something..."
        onSelectionChange={handleSelectionChange}
        style={styles.input}
      />
      {/* Add more content here */}
    </View>
  );
};

export default OnSelectionChange;

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
