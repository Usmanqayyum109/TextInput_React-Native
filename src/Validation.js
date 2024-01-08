import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

const Validation = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    emailTest: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = () => {
    if (!userData.email) {
      setErrors(prevErrors => ({...prevErrors, email: true}));
      setErrorMessage('Email is required');
    } else if (!emailRegex.test(userData.email)) {
      setErrors(prevErrors => ({...prevErrors, email: true}));
      setErrorMessage('Email is not correct');
    } else if (!userData.password) {
      setErrors(prevErrors => ({...prevErrors, password: true}));
      setErrorMessage('Password is required');
    } else {
      // Clear errors if validation passes
      setErrors({email: false, password: false, emailTest: false});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Validation</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={userData.email}
        onChangeText={text => {
          setUserData(prevUserData => ({...prevUserData, email: text}));
          setErrors(prevErrors => ({...prevErrors, email: false}));
        }}
      />
      {errors.email && <Text style={styles.error}>{errorMessage}</Text>}

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={userData.password}
        onChangeText={text => {
          setUserData(prevUserData => ({...prevUserData, password: text}));
          setErrors(prevErrors => ({...prevErrors, password: false}));
        }}
      />
      {errors.password && <Text style={styles.error}>{errorMessage}</Text>}

      <Button title="Submit" onPress={handleValidation} />
    </View>
  );
};

export default Validation;

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
  error: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'normal',
    width: '80%',
  },
});
