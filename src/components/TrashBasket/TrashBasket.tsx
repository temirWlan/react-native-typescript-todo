import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const TrashBasket: React.FC = () => {
	return (
		<View style={styles.circle}>
			<Image 
				style={styles.img}
				sourse={require('../../assets/img/recycle-bin.png')}
			/>
		</View>
	)
}

export default TrashBasket;