import React, { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Nav';

const Layout = ( props ) => {
	return (
		<>
			<div>
				<Nav loggedIn={ props } />
			</div>
			<Outlet />
		</>
	)
}

export default Layout