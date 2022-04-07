import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MdEditNote, MdPlaylistAddCheck } from "react-icons/md";
import { getUser, editBio } from '../Helpers/User';
import { imgUrl } from '../Helpers/Api';
import { getUserPfp } from '../Helpers/Image';
import { getComicsFromUser } from '../Helpers/Comic';
import ComicThumbs from '../Partials/ComicThumbs';


const Profile = () => {

	let param = useParams()

	const [ user, setUser ] = useState()
	const [ userIcon, setUserIcon ] = useState()
	const [ err, setErr ] = useState( false )
	const [ loading, setLoading ] = useState( true )
	const [ bio, setBio ] = useState()
	const [ comics, setComics ] = useState()

	useEffect( async () => {
		await getUser( param.user ).then( resu => {
			if ( resu.found === true ) {
				setUser( resu.user )
				setBio( resu.user.bio )
				setErr( false )
				setLoading( false )
				getUserPfp( resu.user.icon[ 0 ] ).then( resIcon => {
					if ( resIcon ) {
						if ( resIcon.userIcon === "default.png" ) {
							setUserIcon( imgUrl + '/icons/default.png' )
						} else {
							setUserIcon( imgUrl + "/" + resu.user._id + "/icon/" + resIcon.userIcon )
						}
						setErr()
					} else {
						setErr( true )
						setUserIcon()
					}
				} )
				getComicsFromUser( resu.user._id ).then( resc => {
					if ( resc ) {
						setComics( resc )
					} else {
						console.log( 'comic error' )
						setComics()
					}
				} )
			} else {
				setUser()
				setErr( true )
				setLoading( true )
			}
		} )
	}, [ param.user ] )

	let updateBio = ( e ) => {
		e.preventDefault()
		let bioT = document.getElementById( "bio" )
		document.querySelector( "#edit" ).classList.toggle( "active" )
		document.querySelector( "#update" ).classList.toggle( "active" )
		if ( bio === user.bio ) {
			bioT.disabled = true
		} else {
			editBio( user._id, { "bio": bio } ).then( res => {
				if ( res ) {
					console.log( res )
					bioT.disabled = true
				} else {
					console.log( "err" )
				}
			} )
		}
	}

	let activateEdit = ( e ) => {
		e.preventDefault();
		document.querySelector( "#edit" ).classList.toggle( "active" )
		document.querySelector( "#update" ).classList.toggle( "active" )
		let bio = document.getElementById( "bio" )
		bio.disabled = false;
		bio.focus()
		bio.style.height = bio.scrollHeight
	}

	return (
		<section>
			{ user &&
				<div className="profWrap">
					<div className="userContent">
						<div className="userContentTitle">
							<h1>{ user.username }'s Comics</h1>
						</div>
						<div className="userComicContent">
							{ comics &&
								comics.map( ( c, i ) => {
									return <ComicThumbs key={ i } comic={ c } />
								} )
							}
							{
								!comics &&
								<>User has no comics</>
							}
						</div>
					</div>
					<div className="user">
						<div className="userWrap">
							<div className="userTop"></div>
							<div className="userIcon">
								<img src={ userIcon } alt={ user.username } />
							</div>
							<div className="userNames">
								<p>{ user.displayname }</p>
								<p>@{ user.username }</p>
							</div>
							<div className="userBio">
								{
									localStorage.getItem( 'userId' ) === user._id ?
										user.bio === "" ?
											<form id='bioForm'>
												<textarea name="bio" id="bio" placeholder="Write something about yourself..." onChange={ e => setBio( e.target.value ) } disabled ></textarea>
												<button id="edit" className='active' onClick={ ( e ) => activateEdit( e ) } ><MdEditNote /></button>
												<button id="update" onClick={ ( e ) => updateBio( e ) } > <MdPlaylistAddCheck /> </button>
											</form>
											:
											<form id='bioForm'>
												<textarea name="bio" id="bio" defaultValue={ bio } onChange={ e => setBio( e.target.value ) } disabled ></textarea>
												<button id="edit" className='active' onClick={ ( e ) => activateEdit( e ) } ><MdEditNote /></button>
												<button id="update" onClick={ ( e ) => updateBio( e ) } > <MdPlaylistAddCheck /> </button>
											</form>
										:
										<div className='bio'>
											{ user.bio === "" ? <>This user has no bio</> : user.bio }
										</div>
								}
							</div>
						</div>
					</div>
				</div>
			}
			{ loading && !err &&
				<>Loading...</>
			}
			{ err && <Navigate to="/nopage" replace />
			}
		</section>
	);
};

export default Profile;
