import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

export const OnLayout = () => {
  const [inputLayout, setInputLayout] = useState({});

  const handleLayout = event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setInputLayout({x, y, width, height});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>onLayout</Text>
      <TextInput
        style={styles.input}
        onLayout={handleLayout}
        placeholder="Type here"
      />
      <Text>{`Position: (${inputLayout.x}, ${inputLayout.y})`}</Text>
      <Text>{`Dimensions: ${inputLayout.width} x ${inputLayout.height}`}</Text>
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
