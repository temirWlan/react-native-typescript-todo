import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ITodo } from '../../common/interfaces';
import styles from './styles';


const Todo: React.FC<ITodo> = ({ title, isCompleted }) => {
	let [completed, setCompleted] = useState<boolean>(false);

	const toggleComplete = () => {
		// setCompleted(prev =>  {
		// 	completed = !prev;
		// });
	};
	
	return (
		<TouchableOpacity 
			activeOpacity={0.7} 
			onPress={() => setCompleted(!completed)}
		>
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