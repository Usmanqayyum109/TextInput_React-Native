// PromptInput.js
import React, {useState} from 'react';
import {Button, Modal, SafeAreaView, Alert} from 'react-native';
import Prompt from 'react-native-single-prompt';

export const PromptInput = () => {
  const [isPromptActive, setIsPromptActive] = useState(false);

  const handleSubmit = value => {
    Alert.alert(value);
    // Handle the value as needed
    setIsPromptActive(false); // Close the prompt after handling the value
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal transparent={true} visible={isPromptActive} animationType="slide">
        <Prompt
          exit={() => setIsPromptActive(false)}
          submit={handleSubmit}
          name="Email"
        />
      </Modal>
      <Button title="Activate prompt" onPress={() => setIsPromptActive(true)} />
    </SafeAreaView>
  );
};

// node_modules/react-native-single-prompt/Prompt.tsx me ja kr code me change krskty ha or PromptStyles.ts me ja kr style change ya add kr skty ha
