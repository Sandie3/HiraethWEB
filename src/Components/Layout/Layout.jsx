import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import { logout } from '../Helpers/Login'

const Layout = () => {

	const handleLogout = (e) => {
		e.preventDefault();
		logout()
			.then(res => {
				console.log(res)
			})
	}

	return (
		<>
			<div>
				<nav>
					<Link to="/">Public Page</Link>
					<Link to="/admin">Admin Page</Link>
					<Link to="/login">Login</Link>
					<a href="#" onClick={handleLogout}>Logout</a>
				</nav>
			</div>
			<Outlet />
		</>

	)
}

export default Layout