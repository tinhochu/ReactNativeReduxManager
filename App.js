import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

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
				<Router />
			</Provider>
		);
	}
}

export default App;
