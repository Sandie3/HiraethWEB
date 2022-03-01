import React, { useState, useEffect } from 'react';
import { login, loggedin, logout } from './Components/Helpers/Login'

import './Sass/Main.scss';

function App () {

	const [ loggedInMessage, setLoggedInMessage ] = useState()
	const [ isLoggedIn, setIsLoggedIn ] = useState( false )


	const handleLogin = ( e ) => {
		e.preventDefault();
		// console.log( e.target )

		login( e.target )
			.then( res => {
				console.log( res )
				IsLoggedIn( res )
			} )
	}

	const handleLoggedin = ( e ) => {
		e.preventDefault();
		loggedin().then( res => {
			console.log( res )
			IsLoggedIn( res )
		} )
	}

	const handleLogout = ( e ) => {
		e.preventDefault();
		logout()
			.then( res => {
				console.log( res )
				IsLoggedIn( res )
			} )
	}

	const IsLoggedIn = ( e ) => {
		if ( e.login == false ) {
			console.log( 'Not logged in' )
			setLoggedInMessage( 'Not logged in' )
			setIsLoggedIn( false )
		} else {
			console.log( 'Logged in' )
			setLoggedInMessage( 'Logged in' )
			setIsLoggedIn( true )
		}
	}

	return (
		<>
			<form onSubmit={ handleLogin }>
				<input type="text" name="email" />
				<input type="password" name="password" />
				<input type="submit" value="LOGIN" />
			</form>
			<form onSubmit={ handleLoggedin }>
				<input type="submit" value="LOGGEDIN" />
			</form>
			{
				isLoggedIn ?
					<>
						<form onSubmit={ handleLogout }>
							<input type="submit" value="LOGOUT" />
						</form>
					</>
					:
					<></>
			}
			<h1>{ loggedInMessage }</h1>
		</>
	);
}

export default App;
