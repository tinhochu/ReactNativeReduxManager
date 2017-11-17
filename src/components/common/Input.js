import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { labelStyle, inputStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={false}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = {
	labelStyle: {
		flex: 1,
		paddingLeft: 20,
		fontSize: 18
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}

};

export { Input };
