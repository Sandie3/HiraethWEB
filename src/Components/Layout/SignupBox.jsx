import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import * as User from '../../Components/Helpers/User'

const SignupBox = () => {

	let navigate = useNavigate();

	const [ displayName, setDisplayName ] = useState()
	const [ err, setErr ] = useState()

	const handleSubmit = ( e ) => {
		e.preventDefault();
		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )
		User.createUser( e.target )
			.then( res => {
				if ( res ) {
					console.log(res)
					localStorage.setItem( 'username', res.created.username )
					localStorage.setItem( 'userId', res.created._id )
					navigate( "/", { replace: true } );
					setTimeout( () => {
						document.location.reload( true )
					}, 500 );
				} else {
					setErr('ERROR')
				}
			} )
	}

	return (
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
	)
}

export default SignupBox