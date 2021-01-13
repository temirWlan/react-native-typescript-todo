import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const TodoAddButton: React.FC = () => {
	return (
		<View style={styles.circle}>
			<TouchableOpacity activeOpacity={0.7}>
				<Image 
					style={styles.img}
					source={require('../../assets/img/plus.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default TodoAddButton;