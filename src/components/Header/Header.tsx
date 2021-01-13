import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import Burger from '../Burger';

import styles from './styles';


const Component: React.FC = () => {
	return (
		<View style={styles.header}>
			<Burger />
			<TouchableOpacity>
				<Image 
					style={styles.imgBlock}
					source={require('../../assets/img/search.png')} 
				/>
			</TouchableOpacity>
		</View>
	)
}

export default Component;