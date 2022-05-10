import { useState, createContext, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Login from '../Helpers/Login'

export const LoginContext = createContext()

const LoginContextProvider = ( props ) => {

	const [ loggedIn, setloggedIn ] = useState()
	const [ message, setMessage ] = useState()
	const loginStatus = useMemo(() => loggedIn, [loggedIn])


	let navigate = useNavigate()

	let signin = ( e ) => {
		e.preventDefault();
		localStorage.removeItem( 'username' )
		localStorage.removeItem( 'userId' )
		Login.login( e.target )
			.then( res => {
				if ( res.login === true ) {
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
			if ( res.login === false ) {
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

	useEffect(() => {

		Login.loggedin().then( async res => {
				if ( await res.login === true ) {
					setloggedIn( true )
				} else if ( await res.login === false ) {
					setloggedIn( false )
				}
			} )
			
		}, [])
		
	return (
		<LoginContext.Provider value={ { loginStatus, message, signin, signout } }>
			{ props.children }
		</LoginContext.Provider>
	)
};

export default LoginContextProvider;