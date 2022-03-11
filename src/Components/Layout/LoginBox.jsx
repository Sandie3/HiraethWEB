import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import * as Login from '../../Components/Helpers/Login'

const LoginBox = () => {

	const [ err, setErr ] = useState()

	let navigate = useNavigate();
	let location = useLocation();

	let from = location.state?.name || "/";

	const handleSubmit = ( e ) => {
		e.preventDefault();

		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )

		Login.login( e.target )
			.then( res => {
				if ( res.login == true ) {
					localStorage.setItem( 'username', res.username )
					localStorage.setItem( 'userId', res.user_id )
					navigate( from, { replace: true } )
					setTimeout( () => {
						document.location.reload( true )
					}, 500 );

				} else if ( res.login == false ) {
					setErr( res.message )
				}
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
							<input type="submit" className="logBtn" defaultValue="Login" />
							<div className="bottomText">
								<span>Don't have account?</span>
								{/* <a href="#">Sign up now</a> */ }
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