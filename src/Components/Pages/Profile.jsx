import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getUserPfp, editBio, imgUrl } from '../Helpers/User';

const Profile = () => {

	let param = useParams()

	const [ user, setUser ] = useState()
	const [ userIcon, setUserIcon ] = useState()
	const [ err, setErr ] = useState( false )
	const [ loading, setLoading ] = useState( true )
	const [ bio, setBio ] = useState()

	useEffect( () => {
		getUser( param.user ).then( res => {
			if ( res ) {
				setUser( res )
				setErr( false )
				setLoading( false )
				getUserPfp( res.pfp[ 0 ] ).then( res => {
					if ( res ) {
						if ( res.userPfp == "default.png" ) {
							setUserIcon( imgUrl + '/icons/default.png' )
						} else {
							setUserIcon( imgUrl + "/icons/" + res.userPfp )
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

	let updateBio = ( e ) => {
		e.preventDefault()
		document.querySelector( "#edit" ).classList.toggle( "active" )
		document.querySelector( "#update" ).classList.toggle( "active" )
		let bioT = document.getElementById( "bio" )
		editBio( user._id, { "bio": bio } ).then( res => {
			if ( res ) {
				console.log( res )
				bioT.disabled = true
			} else {
				console.log( "err" )
			}
		} )
	}

	let activateEdit = ( e ) => {
		e.preventDefault();
		document.querySelector( "#edit" ).classList.toggle( "active" )
		document.querySelector( "#update" ).classList.toggle( "active" )
		let bio = document.getElementById( "bio" )
		bio.disabled = false;
		bio.focus()
	}

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
								<img src={ userIcon } alt={ user.username } />
							</div>
							<div className="userNames">
								<p>{ user.displayname }</p>
								<p>@{ user.username }</p>
							</div>
						</div>
						<div className="userBio">
							{
								localStorage.getItem( 'userId' ) == user._id ?
									user.bio === "" ?
										<form id='bioForm'>
											<textarea name="bio" id="bio" placeholder="Write something about yourself..." onChange={ e => setBio( e.target.value ) } disabled ></textarea>
											<input type="submit" value="Edit" id="edit" className='active' onClick={ ( e ) => activateEdit( e ) } />
											<input type="submit" value="Update" id="update" onClick={ ( e ) => updateBio( e ) } />
										</form>
										:
										<form id='bioForm'>
											<textarea name="bio" id="bio" defaultValue={ user.bio } onChange={ e => setBio( e.target.value ) } disabled ></textarea>
											<input type="submit" value="Edit" id="edit" className='active' onClick={ ( e ) => activateEdit( e ) } />
											<input type="submit" value="Update" id="update" onClick={ ( e ) => updateBio( e ) } />
										</form>
									:
									<div className='bio'>
										test
									</div>

							}
							{/* {
								localStorage.getItem( 'userId' ) != user._id &&
								<div>
									test
								</div>
							} */}
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
