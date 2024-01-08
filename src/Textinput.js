import {View, TextInput, StyleSheet, Text, Button} from 'react-native';
import React, {useState, useRef} from 'react';

// A foundational component for inputting text into the app via a keyboard.

// Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=true.

// issue If the Text element is replaced with a TextInput element with the same style the shadow is lost.

export default function Textinput() {
  const [value, setvalue] = useState('');
  const textInput = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  // const name = textInput.current.isFocused();
  // console.log(name);

  const clearText = () => {
    if (textInput.current) {
      textInput.current.clear();
      // clear() TextInput Method
      // Removes all text from the TextInput.
    }
  };

  const handleFocus = () => {
    // Focus on TextInput
    textInput.current.focus();
  };

  const handleBlur = () => {
    // Removing focus from TextInput
    textInput.current.blur();
  };

  const handleCheckFocus = () => {
    // Check if TextInput is focused
    const focused = textInput.current.isFocused();
    setIsInputFocused(focused);
  };

  const handleEndEditing = () => {
    console.log('End editing. Value:', value + '$');
    // You can perform additional actions here based on the entered text
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TextInput</Text>
      <TextInput
        ref={textInput}
        style={styles.input}
        placeholder="Name" // The string that will be rendered before text input has been entered.
        placeholderTextColor="gray" // The text color of the placeholder string.
        readOnly={false} // If true, text is not editable. The default value is false.
        underlineColorAndroid="transparent" // (Android) The color of the TextInput underline.
        defaultValue="" //  Provides an initial value that will change when the user starts typing. Useful for use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.
        cursorColor="gold" // (Android) When provided it will set the color of the cursor (or "caret") in the component. Unlike the behavior of selectionColor the cursor color will be set independently from the color of the text selection box.
        editable={true} // If false, text is not editable. The default value is true.
        inputMode="text" // Works like the inputmode attribute in HTML, it determines which keyboard to open, e.g. numeric and has precedence over keyboardType.
        keyboardType="default" // Determines which keyboard to open, e.g.numeric.
        secureTextEntry={false} // If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline={true}.
        // selection={{start: 1, end: 5}}
        textAlign="left" // Align the input text to the left, center, or right sides of the input field.
        value={value} // The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to setting the same value, either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.
        onChangeText={e => setvalue(e)} // Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.
        autoCorrect={true} // If false, disables auto-correct. The default value is true.
        autoCapitalize={'sentences'} // Tells TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad.
        autoComplete="name-family" // Specifies autocomplete hints for the system, so it can provide autofill. On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content. To disable autocomplete, set autoComplete to off.
        allowFontScaling={false} // Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.
        autoFocus={false} // If true, focuses the input on componentDidMount or useEffect. The default value is false.
        multiline={true} // If true, the text input can be multiple lines. The default value is false.
        numberOfLines={1} // (Android) Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.
        textAlignVertical="top" // Text Copmonent Prop
        caretHidden={false} // If true, caret is hidden. The default value is false.
        contextMenuHidden={false} // If true, context menu is hidden. The default value is false. (copy, paste, cut etc)
        enterKeyHint="search" // Determines what text should be shown to the return key. Has precedence over the returnKeyType prop.
        // inlineImageLeft="image_6"
        maxLength={30} // Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.
        // maxFontSizeMultiplier={null} // Specifies largest possible scale a font can reach when allowFontScaling is enabled.
        returnKeyType="none" // (not sopport multiline) Determines how the return key should look. On Android you can also use returnKeyLabel.
        rows={1} // Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.
        textBreakStrategy="highQuality" // Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is highQuality.
        blurOnSubmit={true} // If true, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting blurOnSubmit to true means that pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.
        // yani keyboard dismiss ho jata ha jab ok pr click kry
        disableFullscreenUI={false} // landscape me space kafi mil jati textinput ko
        importantForAutofill="yes" // Tells the operating system whether the individual fields in your app should be included in a view structure for autofill purposes on Android API Level 26+. Possible values are auto, no, noExcludeDescendants, yes, and yesExcludeDescendants. The default value is auto.
        onFocus={e => console.log('onFocus', e.nativeEvent)} // Callback that is called when the text input is focused
        onSubmitEditing={e => console.log('onSubmitEditing', e.nativeEvent)} // Callback that is called when the text input's submit button is pressed.
        /**
      Note that on iOS this method isn't called when using keyboardType="phone-pad".
         */
        onPressIn={e => console.log('onPressIn', e.nativeEvent)} // Callback that is called when a touch is engaged.
        onPressOut={e => console.log('onPressOut', e.nativeEvent)} // Callback that is called when a touch is released.
        onEndEditing={handleEndEditing} // Callback that is called when text input ends.
        returnKeyLabel="search"
      />
      <View style={{marginTop: 40}}>
        {/* <Button title="Clear Text" onPress={() => clearText()} /> */}
        {/* <Button title="Focus" onPress={() => handleFocus()} /> */}
        {/* <Button title="Blur" onPress={() => handleBlur()} /> */}
        {/*
        <Button title="Check Focus" onPress={() => handleCheckFocus()} />
        <Text>
          {isInputFocused ? 'Input is focused' : 'Input is not focused'}
        </Text>
  */}
      </View>
    </View>
  );
}

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
