import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {
	return (
		<Router sceneStyle={{}}>
			<Stack key="root">
				<Scene key="login" component={LoginForm} title="Please Login" initial />
				<Scene key="employeeList" component={EmployeeList} title="Employees" />
			</Stack>
		</Router>
	);
};

export default RouterComponent;
