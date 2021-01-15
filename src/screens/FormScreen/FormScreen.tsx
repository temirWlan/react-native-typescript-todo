import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import withScreen from '../../hoc/Screen';
import TodoAddForm from '../../components/TodoAddForm';

import commonStyles from '../../hoc/Screen/styles';
import styles from './styles';


interface NavigationParams {
  text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface IProps {
  navigation: Navigation;
}

const FormScreen: React.FC<IProps> = ({ navigation }) => {
	return (
		<View style={commonStyles.wrapper}>
			<TouchableOpacity 
				activeOpacity={0.7}
				onPress={() => navigation.navigate('Home')}
			>
	      <Image
	        style={styles.img}
	        source={require('../../assets/img/сross.png')} 
	      />
	    </TouchableOpacity>
	    <Text style={styles.title}>
				Add Task
			</Text>
	    <TodoAddForm />
		</View>
	)
};

export default FormScreen;