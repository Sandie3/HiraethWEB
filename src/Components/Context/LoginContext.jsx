import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Login from '../Helpers/Login'
import { createUser } from '../Helpers/User';

export const LoginContext = createContext()

const LoginContextProvider = ( props ) => {

	let [ user, setUser ] = useState( null )
	const [ loggedIn, setloggedIn ] = useState( null )
	const [ message, setMessage ] = useState()

	let navigate = useNavigate()

	let signin = ( e ) => {
		e.preventDefault();
		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )
		Login.login( e.target )
			.then( res => {
				if ( res.login == true ) {
					localStorage.setItem( 'username', res.username )
					localStorage.setItem( 'userId', res.user_id )
					setloggedIn( true )
					console.log( res )
				} else {
					console.log( res )
					setloggedIn( false )
					setMessage( res.message )
				}
			} )
	};

	let signout = ( e ) => {
		Login.logout().then( res => {
			if ( res.login == false ) {
				localStorage.removeItem( 'username' )
				localStorage.removeItem( 'userId' )
				navigate( "/login", { replace: true } )
				setTimeout( () => {
					document.location.reload( true )
				}, 500 );
			} else {
				setMessage( res.message )
			}
		} )
	};

	let signUp = ( e ) => {
		e.preventDefault();
		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )
		createUser(e).then( res => {
			if (res.login == false) {
				console.log( res )
					localStorage.setItem( 'username', res.created.username )
					localStorage.setItem( 'userId', res.created._id )
					navigate( "/", { replace: true } );
					setTimeout( () => {
						document.location.reload( true )
					}, 500 );
			}else{
				setMessage( res.message )
			}
		} )
	}

	let isLoggedIn = () => {
		Login.loggedin().then( res => {
			if ( res.login == true ) {
				// return true;
				setloggedIn( true )
			} else if ( res.login == false ) {
				// return false;
				setloggedIn( false )
			}
		} )
	}
	isLoggedIn();

	return (
		<LoginContext.Provider value={ { user, loggedIn, message, signin, signout, signUp } }>
			{ props.children }
		</LoginContext.Provider>
	)
};

export default LoginContextProvider;