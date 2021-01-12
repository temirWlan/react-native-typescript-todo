import React from 'react';
import { View, FlatList } from 'react-native';

import Card from '../Card';

import { ICategoryCard } from '../../common/interfaces';
import styles from './styles';

interface IProps {
	items: ICategoryCard[];
}

const CardList: React.FC<IProps> = ({ items }) => {
	const renderCards = ({ item, index }) => {
		return <Card {...item} />
	};

	const renderSeparator = () => {
		return <View style={styles.separator} />
	};

	return <FlatList
		horizontal={true}
		showsHorizontalScrollIndicator={false}
		ItemSeparatorComponent={renderSeparator}
    data={items}
    renderItem={renderCards}
    keyExtractor={(item) => item.id}
  />
}

export default CardList;