import {View} from 'react-native';
import React from 'react';
import Textinput from './src/Textinput';
import {OnKeyPress} from './src/OnKeyPress';
import {OnContentSizeChange} from './src/OnContentSizeChange';
import {OnLayout} from './src/OnLayout';
import OnScroll from './src/OnScroll';
import OnSelectionChange from './src/OnSelectionChange';
import Selection from './src/Selection';
import SelectTextOnFocus from './src/SelectTextOnFocus';
import ShowSoftInputOnFocus from './src/ShowSoftInputOnFocus';
import Validation from './src/Validation';
import {PromptInput} from './src/PromptInput';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <OnKeyPress /> */}
      {/* <OnContentSizeChange /> */}
      {/* <OnLayout /> */}
      {/* <OnScroll /> */}
      {/* <Textinput /> */}
      {/* <OnSelectionChange /> */}
      {/* <Selection /> */}
      {/* <SelectTextOnFocus /> */}
      {/* <ShowSoftInputOnFocus /> */}
      {/* <Validation /> */}
      <PromptInput />
    </View>
  );
}
