import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text, StyleSheet} from 'react-native';

const OnScroll = () => {
  const [scrollOffset, setScrollOffset] = useState({x: 0, y: 0});
  const [inputValue, setInputValue] = useState('');

  const handleScroll = event => {
    const {x, y} = event.nativeEvent.contentOffset;
    setScrollOffset({x, y});
  };

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} style={{flex: 1}}>
        <Text style={{fontSize: 20, padding: 10}}>
          Scroll me to see the magic!
        </Text>
        {/* Add more content here */}
        <TextInput
          placeholder="Type something..."
          value={inputValue}
          onChangeText={handleInputChange}
          style={styles.input}
          returnKeyType="none"
        />
        <View style={{height: 900, width: 900, backgroundColor: 'red'}}></View>
        {/* Add more content here */}
      </ScrollView>
      <View>
        <Text>{`Scroll Position: x=${scrollOffset.x}, y=${scrollOffset.y}`}</Text>
        <Text>{`Input Value: ${inputValue}`}</Text>
      </View>
    </View>
  );
};

export default OnScroll;

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
