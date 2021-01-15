import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import styles from './styles';

interface NavigationParams {
  text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface IProps {
  navigation: Navigation;
}

const withScreen: React.FC<IProps> = ({ navigation }) => (Screen: React.FC) => {
	return (
		<View style={styles.wrapper}>
			<Screen navigation={navigation} />
		</View>
	)
};

// export default withScreen;