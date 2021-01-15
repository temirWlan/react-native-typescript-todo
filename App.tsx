import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, FormScreen } from './src/screens';

import store from './src/store';
import Firebase from '.src/services/firebase';

import styles from './styles';


const Stack = createStackNavigator();
const option = { 
  headerShown: false 
};

export default function App() {
  return (
  	<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={HomeScreen} 
            options={option} 
          />
          <Stack.Screen 
            name='Form' 
            component={FormScreen} 
            options={option}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}

/*
  - todos - OlLcgFfVCU9LsWOHhocs
  - categories - pD3YskhMxhT1SHShm8UN
*/