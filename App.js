import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

const Stack = createStackNavigator();

export default class App extends Component() {

  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screen1">

            <Stack.Screen 
              name="Screen1"
              component={Screen1}/>

            <Stack.Screen 
              name="Screen2"
              component={Screen2}/>

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    backgroundColor: 'purple',
  }
});



