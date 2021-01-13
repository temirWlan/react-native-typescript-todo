import { StyleSheet } from 'react-native';

import commonStyles from '../../common/styles';

const { screenTitle: title, sectionTitle } = commonStyles;
const styles = StyleSheet.create({
	title,
	subtitle: {
		...sectionTitle,
		marginTop: 60,
		marginBottom: 20
	},
	cards: {
		marginTop: 30
	},
	btn: {
		position: 'absolute',
		right: 30,
		bottom: 50
	}
});

export default styles;