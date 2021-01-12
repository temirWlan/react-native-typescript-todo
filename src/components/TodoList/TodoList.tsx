import React from 'react';
import { View, FlatList } from 'react-native';

import Todo from '../Todo';

import { ITodo } from '../../common/interfaces';
import styles from './styles';

interface IProps {
	items: ITodo[];
}

const TodoList: React.FC<IProps> = ({ items }) => {
	const renderTodos = ({ item }) => {
		return <Todo {...item} />
	};

	const renderSeparator = () => {
		return <View style={styles.separator} />
	};

	return <FlatList
		ItemSeparatorComponent={renderSeparator}
		showsVerticalScrollIndicator={false}
    data={items}
    renderItem={renderTodos}
    keyExtractor={(item) => item.id}
  />
}

export default TodoList;