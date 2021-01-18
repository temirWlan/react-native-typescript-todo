import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import withScreen from '../../hoc/Screen';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import TodoList from '../../components/TodoList';
import TodoAddButton from '../../components/TodoAddButton';

import { ICategory, ITodo } from './src/common/interfaces';

import commonStyles from '../../hoc/Screen/styles';
import styles from './styles';


interface NavigationParams {
  text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface IProps {
  navigation: Navigation;
}

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
	const [categoryCards, setCategoryCards] = useState<ICategory[]>([
    {
      id: Math.random().toString(),
      category: 'Business', 
      completed: 30,
      total: 40
    },
    {
      id: Math.random().toString(),
      category: 'Personal', 
      completed: 15, 
      total: 55
    }
  ]);

  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: Math.random().toString(),
      title: 'Learn Node.js',
      isCompleted: false
    },
    {
      id: Math.random().toString(),
      title: 'Buy products',
      isCompleted: false
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js',
      isCompleted: false
    },
    {
      id: Math.random().toString(),
      title: 'Buy products',
      isCompleted: false
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js',
      isCompleted: false
    },
    {
      id: Math.random().toString(),
      title: 'Buy products',
      isCompleted: false
    }
  ]);

  return (
  	<View style={commonStyles.wrapper}>
      <Header />
      <Text style={styles.title} numberOfLines={1}>
        What’s up, Temirlan
      </Text>
      <View style={styles.cards}>
        <Text style={styles.subtitle}>
          Categories
        </Text> 
        <CardList items={categoryCards} />
      </View>
      <Text style={styles.subtitle}>
        Today's tasks
      </Text>
      <TodoList items={todos} />
      <TouchableOpacity 
        style={styles.btn}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Form')}
      >
        <TodoAddButton />
      </TouchableOpacity> 
    </View>
  )
};

export default HomeScreen;