import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

import { ITodo, ICategoryCard } from '../../common/interfaces';
import styles from './styles';

interface IFormData {
	category: string;
	description: string;
}

const TodoAddForm: React.FC = () => {
	const [formData, setFormData] = useState<IFormData>({
		category: '',
		description: ''
	});
	const [todo, setTodo] = useState<ITodo>({
		title: '',
		isCompleted: false
	});

	const onAddTodo = async () => {
		const { category, description } = formData;

		if (category.trim() && description.trim()) {
			setTodo({
				title: description,
				isCompleted: false
			});

			setTodo({ title: '', isCompleted: false });
			setFormData({ category: '', description: '' });
		} else {
			Alert.alert('Fill fields');
		}
	};

	return (
		<View style={styles.form}>
			<View style={styles.fields}>
				<TextInput 
					style={styles.field}
					autoCorrect={false}
					placeholder='Category'
					placeholderTextColor='rgba(255, 255, 255, 0.5)'
					value={formData.category}
					onChangeText={() => setFormData({ ...formData, category: value })}
				/>
				<TextInput 
					style={{ ...styles.field, ...styles.textarea }}
					autoCorrect={false}
					placeholder='Description'
					placeholderTextColor='rgba(255, 255, 255, 0.5)'
					multiline={true}
					numberOfLines={2}
					value={formData.description}
					onChangeText={() => setFormData({ ...formData, description: value })}
				/>
			</View>
			<TouchableOpacity 
				style={styles.btn}
				activeOpacity={0.7}
				onPress={onAddTodo}
			>
				<Text style={styles.btnText}>
					Add
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TodoAddForm;

