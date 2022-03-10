import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = ( props ) => {
	let navigate = useNavigate()
	return (
		<>
			{ props.loggedIn ? <Outlet /> : navigate( "/", { replace: true } ) }
		</>
	)
}

export default AdminLayout;
