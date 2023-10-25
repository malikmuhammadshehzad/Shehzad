import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/reducers/AuthReducer';
import {styles} from './Style';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // hooks
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigation = useNavigation() 

  //   useSelector is used for getting the store data
  const {userData, isLoading, isSuccess, isError, errorMessage} = useSelector(
    state => state.Auth,
  );

  // console.log('checking states in Login Screen:', {
  //   userData,
  //   isLoading,
  //   isSuccess,
  //   errorMessage,
  //   isError,
  // });

  // login Function
  const LoginFunction = () => {
    const userObj = {
      username: userName,
      password: password,
    };

    dispatch(loginUser(userObj));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Welcome back</Text>
      <Text>UserName</Text>
      <TextInput
        style={styles.inputStyle}
        value={userName}
        placeholder="Enter UserName"
        onChangeText={text => setUserName(text)}
      />
      <Text>Password </Text>
      <TextInput
        style={styles.inputStyle}
        value={password}
        placeholder="Enter Your Password"
        onChangeText={text => setPassword(text)}
      />
              <Text style={styles.navText} > Do have an account   <Text onPress={()=> navigation.navigate('sigUP')} style={styles.text} >  Create a new account </Text> </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={LoginFunction} />
      )}
    
      
    </View>
  );
};

export default Login;
