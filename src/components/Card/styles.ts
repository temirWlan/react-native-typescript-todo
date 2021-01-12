import { StyleSheet } from 'react-native';

import commonStyles from '../../common/styles';

const { wrapper } = commonStyles;

const styles = StyleSheet.create({
	card: {
		...wrapper,
		width: 210,
		height: 120,
		paddingTop: 26,
		paddingBottom: 20,
		paddingHorizontal: 25,

		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#000'
	},
	title: {
		marginTop: 6,
		fontWeight: 'bold',
		fontSize: 20,
		lineHeight: 26,
		color: '#fff'
	},
	description: {
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 1,
		color: '#596ca3'
	},
	progressBar: {
		marginTop: 20,
		flexDirection: 'row',
		flex: 1,
		height: 3,
		backgroundColor: '#968383'
	},
	progressBarInner: {
		height: 3,
		backgroundColor: '#eb06ff'
	}
});

export default styles;