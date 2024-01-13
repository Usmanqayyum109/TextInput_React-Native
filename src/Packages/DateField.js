import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import DateField from 'react-native-datefield';
import flatted from 'flatted';

export default function Datefield() {
  const currentDate = new Date();
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Ek din ka milliseconds

  const modifiedDate = new Date(currentDate - oneDayMilliseconds);

  const Dateref = useRef();

  // useEffect(() => {
  //   console.log(flatted.stringify(Dateref.current, null, 2));
  // }, [Dateref.current]);

  return (
    <View style={styles.container}>
      {/* <DateField
        styleInput={styles.inputBorder}
        onSubmit={value => console.log(value)}
      /> */}

      <DateField
        ref={Dateref}
        editable={true}
        placeholderTextColor="red"
        autoFocus={false}
        styleInputYear={{backgroundColor: 'green'}}
        hideDate={false}
        handleErrors={error => console.log('error', error)}
        containerStyle={{
          backgroundColor: 'black',
          //   alignItems: 'flex-end',
          //   flex: 1,
          //   padding: -10,
          //   margin: -10,
        }}
        value={new Date()}
        // maximumDate={new Date(2023, 3, 10)}
        // minimumDate={new Date(2023, 2, 23)}
        minimumDate={modifiedDate}
        labelDate="Input date"
        labelMonth="Input month"
        labelYear="Input year"
        // defaultValue={new Date()}
        styleInput={styles.inputBorder}
        onSubmit={value => console.log(value)}
      />

      {/* <DateField
        editable={false}
        styleInput={styles.inputBorder}
        maximumDate={new Date(2023, 3, 10)}
        minimumDate={new Date(2021, 4, 21)}
        handleErrors={() => console.log('ERROR')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'brown',
  },
});
