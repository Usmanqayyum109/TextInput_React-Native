import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

export const OnContentSizeChange = () => {
  const [contentSize, setContentSize] = useState({width: 0, height: 0});

  const handleContentSizeChange = event => {
    const {
      contentSize: {width, height},
    } = event.nativeEvent;
    setContentSize({width, height});
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        style={styles.input}
        onContentSizeChange={handleContentSizeChange}
        placeholder="Type here"
      />
      <Text>
        Content Width: {Math.round(contentSize.width)}, Content Height:{' '}
        {Math.round(contentSize.height)}
      </Text>
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
