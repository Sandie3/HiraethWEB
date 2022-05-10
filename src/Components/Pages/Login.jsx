import React, { useContext } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'

const LoginBox = () => {

	const { signin, loginStatus } = useContext( LoginContext )

	let navigate = useNavigate();

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		await signin( e )
		navigate( "/", { replace: true } )
		setTimeout( () => {
			document.location.reload( true )
		}, 500 );

	}

	return (
		<>
			{
				!loginStatus &&
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
				loginStatus && <Navigate to="/" replace />
			}
		</>
	)
}

export default LoginBox