import React from 'react';
import { View, Text } from 'react-native';

import { ICategoryCard } from '../../common/interfaces';
import styles from './styles';

const Card: React.FC<ICategoryCard> = ({ category, completed, total }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.description}>
				{total} tasks
			</Text>
			<Text style={styles.title}>
				{category}
			</Text>
			<View style={styles.progressBar}>
				<View style={styles.progressBarInner}></View>
			</View>
		</View>
	)
}

export default Card;