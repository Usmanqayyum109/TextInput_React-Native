import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import OtpInput, {FadeInUp} from 'react-native-animated-otp-input';

const AnimatedOtpInput = () => {
  return (
    <View style={styles.container}>
      <OtpInput
        otpCount={4} // maxium is 6
        containerStyle={{backgroundColor: 'purple'}}
        inputStyle={
          {
            // backgroundColor: 'green',
            // borderRadius: 5,
            // borderWidth: 3,
            // borderColor: 'yellow',
          }
        }
        focusColor="blue"
        autoFocus={false}
        editable={true}
        rest={{color: 'red' /* any other text input props */}}
        enteringAnimated={FadeInUp}
        exitingAnimated={FadeInUp}
        onCodeFilled={code => {
          Alert.alert('Notification', `OTP is ${code}`);
        }}
        onCodeChanged={codes => {
          console.log({codes});
        }}
      />
    </View>
  );
};

export default AnimatedOtpInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
