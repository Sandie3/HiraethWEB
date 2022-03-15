import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import * as Login from '../Helpers/Login'

const Nav = () => {

	const { signout, loggedIn } = useContext( LoginContext )

	let navigate = useNavigate();

	let findUser = localStorage.getItem('username');
	let user;
	if (findUser != undefined || findUser != null) {
		user = findUser;
	}

	const handleLogout = async () => {
		await signout()
		navigate( "/", { replace: true } )
		setTimeout( () => {
			document.location.reload( true )
		}, 500 );
	}


	return (
		<nav>
			<Link to="/" className='navLink'>Home</Link>
			{
				loggedIn &&
				<>
					<Link to="/admin" className='navLink'>Admin</Link>
					<Link to={ "/user/" + user } className='navLink'>Profile</Link>
					<button type="submit" className="navLink" onClick={ handleLogout }>Logout</button>
				</>
			}
			{
				!loggedIn &&
				<>
					<Link to="/login" className='navLink'>Login</Link>
				</>
			}
		</nav>
	)
}

export default Nav