import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './styles';

const TodoAddForm: React.FC = () => {
	return (
		<View style={styles.formWrapper}>
			<Text style={styles.title}>
				Add task
			</Text>
			<View style={styles.form}>
				<TextInput 
					style={styles.field}
					placeholder='Category'
					placeholderStyle={styles.placeholder}
				/>
				<TextInput 
					style={{ ...styles.field, ...styles.textarea }}
					placeholder='Description'
					placeholderStyle={styles.placeholder}
					multiline={true}
					numberOfLines={5}
				/>
				<Button
					style={styles.btn}
					title='add'
				/>
			</View>	
		</View>
	)
}

export default TodoAddForm;