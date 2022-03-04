import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import { logout } from '../Helpers/Login'

import { AuthStatus } from '../Helpers/Auth.tsx';

const Nav = () => {

	// const handleLogout = ( e ) => {
	// 	e.preventDefault();
	// 	logout()
	// 	.then( res => {
	// 		console.log( res )
	// 		IsLoggedIn( res )
	// 	} )
	// }

	return (
		<div>
			<nav>
				<Link to="/">Public Page</Link>
				<Link to="/protected">Protected Page</Link>
			</nav>
			<AuthStatus />
			<Outlet />
		</div>
		// <>
		// 	<nav>
		// 		<a href="#" onClick={ handleLogout }>Logout</a>
		// 	</nav>
		// 	<Outlet />
		// </>
	)
}

export default Nav