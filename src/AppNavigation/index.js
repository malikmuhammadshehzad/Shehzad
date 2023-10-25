import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, SigUp} from '../Screen';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useSelector(state => state.Auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
        ) : (
        <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="sigUP" component={SigUp} />
         
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
