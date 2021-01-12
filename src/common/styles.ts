import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	wrapper: {
		backgroundColor: '#041955',
		borderRadius: 20
	},
	text: {
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 1
	},
	screenTitle: {
		marginTop: 40,
		fontWeight: 'bold',
		fontSize: 28,
		lineHeight: 30,
		color: '#fff'
	},
	sectionTitle: {
		...this.text,
		textTransform: 'uppercase',
		color: '#dac6c6'
	},
	fieldText: {
		fontSize: 18,
		lineHeight: 24,
		color: '#fff'
	}
});
