import { StyleSheet } from 'react-native';

import commonStyles from './src/common/styles';

const { screenTitle: title, sectionTitle } = commonStyles;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingVertical: 50,
		paddingHorizontal: 24,
		backgroundColor: '#3450A1'
	},
	title,
	subtitle: {
		...sectionTitle,
		marginTop: 60,
		marginBottom: 20
	},
	cards: {
		marginTop: 30
	}
});

export default styles;