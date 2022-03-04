import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet
} from 'react-router-dom'
import * as Login from '../../Components/Helpers/Login'

export const LoginBox = () => {

	let navigate = useNavigate();
	let location = useLocation();

	let from = location.pathname || "/";

	function handleSubmit ( e ) {
		e.preventDefault();
		Login.login( e.currentTarget ).then( res => {
			navigate( from, { replace: true } );
		} )
	}

	return (
		<>
			<p>You must log in to view the page at { from }</p>
			<section>
				<div className="wrapper">
					<div className="colWrap">
						<div className='bgCol'></div>
						<div className='col2'></div>
						<div className='col3'></div>
						<div className='col4'></div>
						<div className='col5'></div>
						<div className='col6'></div>
						<div className='col7'></div>
						<div className='col8'></div>
						<div className='col9'></div>
					</div>
					<form className="loginForm" onSubmit={ handleSubmit }>
						<h1>Login</h1>
						<div className="formWrapper">
							<div className="txtBox">
								<input type="text" id="email" name="email" placeholder='email@example.com' />
							</div>
							<div className="txtBox">
								<input type="password" id="password" name="password" placeholder='******' />
							</div>
							<input type="submit" className="logBtn" value="Login" />
							<div className="bottomText">
								<span>Don't have account?</span>
								<a href="#">Sign up now</a>
							</div>
						</div>
					</form>
				</div >
			</section >
		</>
	)
}