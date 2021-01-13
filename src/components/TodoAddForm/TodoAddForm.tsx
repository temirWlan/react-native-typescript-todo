import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

const TodoAddForm: React.FC = () => {
	return (
		<View style={styles.form}>
			<View style={styles.fields}>
				<TextInput 
					style={styles.field}
					placeholder='Category'
					placeholderTextColor='rgba(255, 255, 255, 0.5)'
				/>
				<TextInput 
					style={{ ...styles.field, ...styles.textarea }}
					placeholder='Description'
					placeholderTextColor='rgba(255, 255, 255, 0.5)'
					multiline={true}
					numberOfLines={2}
				/>
			</View>
			<TouchableOpacity 
				style={styles.btn}
				activeOpacity={0.7}
			>
				<Text style={styles.btnText}>
					Add
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TodoAddForm;