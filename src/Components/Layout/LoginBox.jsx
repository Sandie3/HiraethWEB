import React, { useState, useEffect } from 'react';
import { login } from '../../Components/Helpers/Login'

export const LoginBox = () => {

	const handleLogin = ( e ) => {
		e.preventDefault();
		login( e.target )
			.then( res => {
				console.log( res )
				IsLoggedIn( res )
			} )
	}

	// useEffect(() => {
		
	// 	IsLoggedIn(false)

	// }, [])
	

	const IsLoggedIn = ( e ) => {
		if ( e.login == false ) {
			console.log( 'Not logged in' )
			localStorage.setItem('loggedIn', false);
		} else {
			console.log( 'Logged in' )
			localStorage.setItem('loggedIn', true);
		}
	}

	return (
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
				<form className="loginForm" onSubmit={ handleLogin }>
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
	)
}