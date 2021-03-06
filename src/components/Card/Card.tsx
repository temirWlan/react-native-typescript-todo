import React from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';

import { ICategory } from '../../common/interfaces';
import styles from './styles';

const Card: React.FC<ICategory> = ({ category, completed, total }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.description}>
				{total} tasks
			</Text>
			<Text style={styles.title}>
				{category}
			</Text>
			<ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={total > 0 && Math.round((completed / total) * 10) / 10}
        color='#eb06ff'
      />
		</View>
	)
}

Card.defaultProps = {
	category: 'Category',
	completed: 1,
	total: 10
};

export default Card;