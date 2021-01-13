import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const TodoAddButton: React.FC = () => {
	return (
		<View style={styles.circle} >
			<Image 
				style={styles.img}
				source={require('../../assets/img/plus.png')}
			/>
		</View>
	)
}

export default TodoAddButton;