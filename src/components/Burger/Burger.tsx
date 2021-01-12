import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Component: React.FC = () => {
	return (
		<TouchableOpacity activeOpacity={0.5}>
			<View style={styles.burger}>
				<View style={styles.line} />
				<View style={styles.line}/>
			</View>
		</TouchableOpacity>
	)
}

export default Component;