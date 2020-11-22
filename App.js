import React from 'react';
import {View, Text} from 'react-native';
import Authentification from './app/Screens/Authentification';
import Connect from './app/Screens/Connect';
import Controller from './app/Screens/Controller';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Authentification"
            component={Authentification}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Connect"
            component={Connect}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Controller"
            component={Controller}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
