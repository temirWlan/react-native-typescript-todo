import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header';
import CardList from './src/components/CardList';
import TodoList from './src/components/TodoList';

import { ICategoryCard, ITodo } from './src/common/interfaces';
import styles from './styles';


export default function App() {
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
      title: 'Learn Node.js'
    },
    {
      id: Math.random().toString(),
      title: 'Buy products'
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js'
    },
    {
      id: Math.random().toString(),
      title: 'Buy products'
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js'
    },
    {
      id: Math.random().toString(),
      title: 'Buy products'
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js'
    },
    {
      id: Math.random().toString(),
      title: 'Buydfskl products'
    },
    {
      id: Math.random().toString(),
      title: 'Learn Node.js'
    },
    {
      id: Math.random().toString(),
      title: 'Buy products'
    },
  ]);

  return (
    <View style={styles.wrapper}>
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
    </View>
  );
}
