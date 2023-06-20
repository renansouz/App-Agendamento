import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' ;

import Preload from '../screens/Preload';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';

const Stack = createStackNavigator();

export default () => {
    <Stack.Navigator
    initialRouteName="Preoad"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" components={Preload} />
        <Stack.Screen name="SignIn" components={SignIn} />
        <Stack.Screen name="SignUp" components={SignUp} />
    </Stack.Navigator>
};