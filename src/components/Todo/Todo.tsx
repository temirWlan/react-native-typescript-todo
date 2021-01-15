import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ITodo } from '../../common/interfaces';
import styles from './styles';

const Todo: React.FC<ITodo> = ({ title, isCompleted }) => {
	const toggleComplete = () => {

	};
	
	return (
		<TouchableOpacity activeOpacity={0.7} >
			<View style={styles.todo}>
				<View style={styles.circle} />
				<Text style={styles.title}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

Todo.defaultProps = {
	title: 'Todo',
	isCompleted: false
};

export default Todo;