import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom'
import * as Login from '../../Components/Helpers/Login'
import { LoginContext } from '../Context/LoginContext'

const LoginBox = () => {

	const { signin, user } = useContext( LoginContext )

	const [ err, setErr ] = useState()

	let navigate = useNavigate();
	let location = useLocation();

	let from = location.state?.name || "/";

	const handleSubmit = ( e ) => {
		e.preventDefault();

		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )

		let email = e.target.email.value
		let pwd = e.target.password.value

		signin( e )

		// Login.login( e.target )
		// 	.then( res => {
		// 		if ( res ) {
		// 			localStorage.setItem( 'username', res.username )
		// 			localStorage.setItem( 'userId', res.user_id )
		// 			navigate( from, { replace: true } )
		// 			setTimeout( () => {
		// 				document.location.reload( true )
		// 			}, 500 );

		// 		} else {
		// 			setErr( res.message )
		// 		}
		// 	} )
	}

	return (
		<>
			{
				!user &&
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
			}
			{
				user && <Navigate to="/" replace />
			}
		</>
	)
}

export default LoginBox