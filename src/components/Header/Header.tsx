import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import Burger from '../Burger';

import styles from './styles';


const Component: React.FC = () => {
	return (
		<View style={styles.header}>
			<Burger />
			<TouchableOpacity style={styles.imgBlock}>
				<Image source={require('../../assets/icons/search.svg')} />
			</TouchableOpacity>
		</View>
	)
}

export default Component;