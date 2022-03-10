import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as User from '../Helpers/User'

const Profile = () => {

	let param = useParams()
	console.log(param.user)

	// console.log(props)

	const [ user, setUser ] = useState()
	const [ err, setErr ] = useState( false )
	const [ loading, setLoading ] = useState( true )

	useEffect( () => {
		User.getUser( param.user ).then( res => {
			if ( res ) {
				console.log( res )
				setUser( res )
				setErr( false )
				setLoading( false )
			} else {
				setUser()
				setErr( true )
				setLoading( false )
			}
		} )
	}, [] )

	return (
		<>
			{ user && (
				<>Welcome { user.displayname }</>
			) }
			{ loading && !err && (
				<>Loading...</>
			) }
			{ err && (
				<>ERROR...</>
			) }
		</>
	);
};

export default Profile;
