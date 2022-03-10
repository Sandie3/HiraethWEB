import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import * as Login from '../../Components/Helpers/Login'

const LoginBox = () => {

	let navigate = useNavigate();
	let location = useLocation();

	let from = location.state?.name || "/";

	const handleSubmit = ( e ) => {
		e.preventDefault();

		localStorage.removeItem('username')
		localStorage.removeItem('userId')

		Login.login( e.target )
			.then( res => {
				console.log(res)
				localStorage.setItem('username', res.username)
				localStorage.setItem('userId', res.user_id)
				navigate( from, { replace: true } );
			} )
	}

	return (
		<>
			<section>
				<div className="wrapper">
					<form className="loginForm" onSubmit={ handleSubmit }>
						<h1>Login</h1>
						<div className="formWrapper">
							<div className="txtBox">
								<input type="text" id="email" name="email" placeholder='email@example.com' />
							</div>
							<div className="txtBox">
								<input type="password" id="password" name="password" placeholder='******' />
							</div>
							<input type="submit" className="logBtn"  defaultValue="Login" />
							<div className="bottomText">
								<span>Don't have account?</span>
								{/* <a href="#">Sign up now</a> */}
								<Link to="/signup" >Sign up now</Link>
							</div>
						</div>
					</form>
				</div >
			</section >
		</>
	)
}

export default LoginBox