import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState}   from 'react'
 
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './Style'
 
// import { useNavigation } from '@react-navigation/native'
 

const SignUp = () => {
const [userName, setUserName] = useState('')
const [ password, setPassword] = useState('')
const dispatch = useDispatch()
// const navigation =useNavigation()
const {isLoading} = useSelector( state => state.Auth)

 // SignUp Function

 const signUpFunction =()=>{
    const obj ={
      username : userName ,
       Password:password
    }
    dispatch(signUpFunction(obj))
 }

  return (
    <View style={styles.container}>
    <Text style={styles.headingStyle}>Create a new Account</Text>
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
    {isLoading ? (
      <ActivityIndicator />
    ) : ( 
        <Button title="create a new account"  onPress={signUpFunction} />
    )}
         {/* <Button title="create a new account" style={styles.btn} onPress={navigation.navigate('Login')} /> */}
  </View>
  )
}

export default SignUp

