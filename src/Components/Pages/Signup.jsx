import React, { useState, useContext } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { createUser } from '../Helpers/User';
import { LoginContext } from '../Context/LoginContext'

const SignupBox = () => {

	const { loginStatus } = useContext( LoginContext )

	let navigate = useNavigate();

	const [ displayName, setDisplayName ] = useState()
	const [ message, setMessage ] = useState()

	let signUp = ( e ) => {
		e.preventDefault();
		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )
		console.log( e.target )
		createUser( e.target ).then( res => {
			if ( res ) {
				if ( res.login === false ) {
					console.log( res )
					localStorage.setItem( 'username', res.created.username )
					localStorage.setItem( 'userId', res.created._id )
					navigate( "/", { replace: true } );
					setTimeout( () => {
						document.location.reload( true )
					}, 500 );
				} else {
					setMessage( res.message )
				}
			} else {
				setMessage( res.message )
			}
		} )
	}

	return (
		<>
			{
				!loginStatus &&
				<section>
					<div className="wrapper">
						<form className="loginForm" onSubmit={ signUp }>
							<h1>Signup</h1>
							{ message && message}
							<div className="formWrapper">
								<div className="txtBox">
									<input type="text" id="username" name="username" placeholder='Username' onChange={ e => setDisplayName( e.target.value ) } />
									<input type="disabled" id="displayname" className='displayNone' name="displayname" defaultValue={ displayName } />
								</div>
								<div className="txtBox">
									<input type="text" id="email" name="email" placeholder='email@example.com' />
								</div>
								<div className="txtBox">
									<input type="password" id="password" name="password" placeholder='******' />
								</div>
								<input type="submit" className="logBtn" value="Signup" />
								<div className="bottomText">
									<Link to="/login" >Go back</Link>
								</div>
							</div>
						</form>
					</div >
				</section >
			}
			{
				loginStatus && <Navigate to="/" replace />
			}
		</>
	)
}

export default SignupBox