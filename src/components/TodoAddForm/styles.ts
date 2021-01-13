import { StyleSheet } from 'react-native';

import commonStyles from '../../common/styles';

const { wrapper, fieldText } = commonStyles;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		alignItems: 'center'
	},
	field: {
		...wrapper,
		...fieldText,
		width: 340,
		paddingHorizontal: 30,
		paddingVertical: 23
	},
	textarea: {
		marginTop: 15
	},
	btn: {
		marginTop: 20,
		width: 200,
		height: 60,
		borderRadius: 20,
		backgroundColor: '#eb06ff',
		paddingHorizontal: 70,
		paddingVertical: 17
	},
	btnText: {
		textAlign: 'center', 
		...fieldText
	},
});

export default styles;