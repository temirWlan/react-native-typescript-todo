import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, FormScreen } from './src/screens';

import styles from './styles';

const Stack = createStackNavigator();
const option = { 
  headerShown: false 
};

export default function App() {
  return (
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
  );
}

/*
	<View style={styles.wrapper}>
	</View>
*/