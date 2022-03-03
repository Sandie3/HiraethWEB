import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import { logout } from '../Helpers/Login'

const Nav = () => {

	const handleLogout = ( e ) => {
		e.preventDefault();
		logout()
		.then( res => {
			console.log( res )
			IsLoggedIn( res )
		} )
	}
	
	let loggedIn = localStorage.getItem('loggedIn');
	useEffect(() => {

		if (loggedIn == null || loggedIn == false) {
			loggedIn = false;
		}
		
		IsLoggedIn(loggedIn)

	}, [])
	

	const IsLoggedIn = ( e ) => {
		if ( e.login == false || e == false || e == null ) {
			console.log( 'Not logged in' )
			localStorage.setItem('loggedIn', false);
		} else {
			console.log( 'Logged in' )
			localStorage.setItem('loggedIn', true);
		}
	}

	return (
		<>
			<nav>
				<a href="#" onClick={ handleLogout }>Logout</a>
			</nav>
			<Outlet />
		</>
	)
}

export default Nav