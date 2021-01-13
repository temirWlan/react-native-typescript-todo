import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import TodoAddForm from '../../components/TodoAddForm';

import styles from './styles';


const FormScreen: React.FC = () => {
	return (
		<>
			<TouchableOpacity activeOpacity={0.7}>
	      <Image
	        style={styles.img}
	        source={require('../../assets/img/сross.png')} 
	      />
	    </TouchableOpacity>
	    <Text style={styles.title}>
				Add Task
			</Text>
	    <TodoAddForm />
		</>
	)
};

export default FormScreen;