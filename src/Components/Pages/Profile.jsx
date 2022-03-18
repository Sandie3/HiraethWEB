import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as User from '../Helpers/User'

const Profile = () => {

	let param = useParams()

	const [ user, setUser ] = useState()
	const [ userIcon, setUserIcon ] = useState()
	const [ err, setErr ] = useState( false )
	const [ loading, setLoading ] = useState( true )

	useEffect( () => {
		User.getUser( param.user ).then( res => {
			if ( res ) {
				setUser( res )
				setErr( false )
				setLoading( false )
				User.getUserPfp( res.pfp[ 0 ] ).then( res => {
					if ( res ) {
						if ( res.userPfp == "default.jpg" ) {
							setUserIcon( User.imgUrl + '/icons/default.png' )
						} else {
							setUserIcon( User.imgUrl + "/icons/" + res.userPfp )
						}
						setErr()
					} else {
						setErr( true )
						setUserIcon()
					}
				} )
			} else {
				setUser()
				setErr( true )
				setLoading( false )
			}
		} )
	}, [] )

	return (
		<>
			{ user &&
				<div className="profWrap">
					<div className="userContent">
						{/* <p>id: { user._id }</p>
						<p>Email: { user.email }</p>
						<p>Username: { user.username }</p>
						<p>Bio: { user.bio === "" ? "Write something" : user.bio }</p>
						<p>Posts: { user.posts.length }</p>
						<img src={ userIcon } /> */}
					</div>
					<div className="userInfo">
						<div className="userTop">
							<div className="userIcon">
								<img src={ userIcon } alt="" />
							</div>
							<div className="userNames">
								<p>{ user.displayname }</p>
								<p>@{ user.username }</p>
							</div>
						</div>
						<div className="userBio">
							<p>{ user.bio === "" ? "Write something about yourself..." : user.bio }</p>
						</div>
					</div>
				</div>
			}
			{ loading && !err &&
				<>Loading...</>
			}
			{ err &&
				<>ERROR...</>
			}
		</>
	);
};

export default Profile;
