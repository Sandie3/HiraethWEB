import React, { useState, useContext } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'

const SignupBox = () => {

	const { loggedIn, signUp } = useContext( LoginContext )

	let navigate = useNavigate();

	const [ displayName, setDisplayName ] = useState()

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		await signUp( e )
		navigate( "/", { replace: true } )
		setTimeout( () => {
			document.location.reload( true )
		}, 500 );
	}

	return (
		<>
			{
				!loggedIn &&
				<section>
					<div className="wrapper">
						<form className="loginForm" onSubmit={ handleSubmit }>
							<h1>Signup</h1>
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
				loggedIn && <Navigate to="/" replace />
			}
		</>
	)
}

export default SignupBox