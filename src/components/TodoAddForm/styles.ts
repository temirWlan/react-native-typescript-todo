import { StyleSheet } from 'react-native';

import { wrappper, fieldText } from '../../common/styles';

const styles = StyleSheet.create({
	formWrapper: {
		width: 350
	},
	title: {

	},
	form: {
		marginTop: 70,
		flex: 1
	},
	field: {
		...wrappper,
		...fieldText,
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 23
	},
	placeholder: {
		...fieldText,
		color: rgba(255, 255, 255, 0.7)
	},
	textarea: {
		marginTop: 15
	},
	btn: {
		marginTop: 20,
		width: 200,
		height: 60,
		backgroundColor: '#eb06ff',
		borderRadius: 20
	}
});

export default styles;