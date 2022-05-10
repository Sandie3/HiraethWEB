import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Toggle from '../Toggle'

import { getUsers } from '../Helpers/User'

const Dashboard = () => {

	const [ users, setUsers ] = useState()
	const [ err, setErr ] = useState( false )

	useEffect( () => {

		getUsers().then( res => {
			if ( res ) {
				setErr( false )
				setUsers( res )
			} else {
				setErr( true )
				setUsers()
			}
		} )

	}, [] )


	return (
		<>
			{
				users &&
				<>
				<Toggle />
					{ 
					users.map( ( u, i ) => {
						return (
							<Fragment key={ i }>
								<Link to={ "/u/" + u.username }>{ u.username }</Link><br />
							</Fragment>
						)
					} )
					}
				</>
			}
			{
				!users && !err && <p>Loading...</p>
			}
			{
				err && <h1>ERROR!</h1>
			}
		</>
	)
}

export default Dashboard