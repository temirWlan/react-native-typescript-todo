import React from 'react';
import { View } from 'react-native';

import { HomeScreen, FormScreen } from './src/screens';

import styles from './styles';


export default function App() {
  return (
    <View style={styles.wrapper}>
      <FormScreen />
    </View>
  );
}
