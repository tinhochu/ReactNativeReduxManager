import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;
