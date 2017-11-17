import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCH9D3JZuHP0DhGfXMRJKIjSQX0SQzNBzs',
			authDomain: 'reactnativereduxmanager.firebaseapp.com',
			databaseURL: 'https://reactnativereduxmanager.firebaseio.com',
			projectId: 'reactnativereduxmanager',
			storageBucket: 'reactnativereduxmanager.appspot.com',
			messagingSenderId: '353360263603'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>

				</View>
			</Provider>
		);
	}
}

export default App;
