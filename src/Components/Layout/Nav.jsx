import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

const Nav = () => {

	const { signout, loginStatus } = useContext( LoginContext )

	let navigate = useNavigate();

	let findUser = localStorage.getItem( 'username' );
	let user;
	if ( findUser !== undefined || findUser !== null ) {
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
			<div className="navWrap">
				<Link to="/" className='navLink'>Home</Link>
				{
					loginStatus &&
					<>
						<Link to="/admin" className='navLink'>Admin</Link>
						{/* <Link to={ "/user/" + user } className='navLink'>Profile</Link> */ }
						{/* <a href={ "/u/" + user } className='navLink'>Profile</a> */}
						<Link to={ "/u/" + user } className='navLink'>Profile</Link>
						<button type="submit" className="navLink" onClick={ handleLogout }>Logout</button>
					</>
				}
				{
					!loginStatus &&
					<>
						<Link to="/login" className='navLink'>Login</Link>
					</>
				}
			</div>
		</nav>
	)
}

export default Nav