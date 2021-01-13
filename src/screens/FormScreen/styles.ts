import { StyleSheet } from 'react-native';

import commonStyles from '../../common/styles';

const { screenTitle } = commonStyles;
const styles = StyleSheet.create({
	img: {
		width: 22,
		height: 20
	},
	title: { 
		...screenTitle,
		marginBottom: 70,
		textAlign: 'center'
	}
});

export default styles;