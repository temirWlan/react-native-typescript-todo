import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import CardList from '../../components/CardList';
import TodoList from '../../components/TodoList';
import TodoAddButton from '../../components/TodoAddButton';

import { ICategoryCard, ITodo } from './src/common/interfaces';
import styles from './styles';


const HomeScreen: React.FC = () => {
	const [categoryCards, setCategoryCards] = useState<ICategoryCard[]>([
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
  	<>
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
      <View style={styles.btn}>
        <TodoAddButton />
      </View> 
    </>
  )
};

export default HomeScreen;