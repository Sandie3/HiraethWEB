import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { LoginContext } from '../Context/LoginContext';

const AdminLayout = ( ) => {

	const { loggedIn } = useContext(LoginContext)

	if (!loggedIn) {
		return <Navigate to="/login" replace />
	}

	return (

			<Outlet /> 

	)
}

export default AdminLayout;
