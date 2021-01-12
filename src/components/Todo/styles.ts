import { StyleSheet } from 'react-native';

import commonStyles from '../../common/styles';

const { wrapper, fieldText } = commonStyles;

const styles = StyleSheet.create({
	todo: {
		...wrapper,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 70,
		paddingHorizontal: 24,
		paddingVertical: 20
	},
	circle: {
		width: 30,
		height: 30,
		backgroundColor: '#eb06ff',
		borderRadius: 30 / 2
	},
	title: {
		...fieldText,
		marginLeft: 22	
	}
});

export default styles;