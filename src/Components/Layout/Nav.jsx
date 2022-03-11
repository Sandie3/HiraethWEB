import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import * as Login from '../Helpers/Login'

const Nav = ( props ) => {

	let navigate = useNavigate();

	let user;
	localStorage.getItem( 'username' )
	user = localStorage.getItem( 'username' )

	const handleLogout = ( e ) => {
		Login.logout()
			.then( res => {
				if ( res ) {
					localStorage.removeItem( 'username' )
					localStorage.removeItem( 'userId' )
					navigate( "/", { replace: true } )
					setTimeout(() => {
						document.location.reload( true )
					}, 500);
				} else {
					e.preventDefault();
				}
				console.log(res)
			} )
	}

	return (
		<nav>
			<Link to="/" className='navLink'>Home</Link>
			{
				!props.loggedIn.loggedIn
					?
					<>
						<Link to="/login" className='navLink'>Login</Link>
					</>
					:
					<>
						<Link to="/admin" className='navLink'>Admin</Link>
						<Link to={ "/user/" + user } className='navLink'>Profile</Link>
						<a className="navLink" onClick={ handleLogout }>Logout</a>
					</>
			}
			{/* {
				props.loggedIn.loggedIn &&
				<>
					<Link to={ "/user/" + user } className='navLink'>Profile</Link>
					<button type="submit" className="navLink" onClick={ handleLogout }>Logout</button>
				</>
			} */}
		</nav>
	)
}

export default Nav