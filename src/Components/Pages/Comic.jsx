import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getComic } from '../Helpers/Comic'
import { imgUrl } from '../Helpers/Api'

const Comic = () => {

	let param = useParams()

	const [ comic, setComic ] = useState()
	const [ loading, setLoading ] = useState()
	const [ err, setErr ] = useState()
	const [ tags, setTags ] = useState()

	useEffect( () => {
		setLoading( true )
		getComic( param.id ).then( res => {
			if ( res ) {
				setComic( res )
				setErr( false )
				setTags( res.tags.split( ", " ) )
			} else {
				setComic()
				setErr( true )
			}
			setLoading( false )
		} )

	}, [param.id] )


	return (
		<section>
			<div className='comic'>
				{
					comic &&
					<>
						<div className="comicTop">
							<div className="comicHero">
								<Link to={ "/viewer/" + comic._id }>
									<img src={ comic.images[ 0 ].path } alt={ comic.title + " image" } />
								</Link>
							</div>
							<div className="comicInfo">
								<h1 className='comicTitle'>{ comic.title }</h1>
								<p className='comicDescription'>{ comic.description }</p>
								<div className='comicTags'>
									<h1>Tags: </h1>

									{
										tags &&
										tags.map( ( t, i ) => <a key={ i } href={ t }>{ t }</a> )
									}
								</div>
							</div>
						</div>
						<div className="comicBottom">
							{
								comic.images.map( ( c, i ) => {
									return (
										<div key={ i }>
											<Link to={ "/viewer/" + comic._id + "/" + (i+1) }>
												<img src={ imgUrl + c.destination + "thumbnail/thumb-" + c.filename } alt={ comic.title + " image" } />
											</Link>
										</div>
									)
								} )
							}
						</div>
					</>
				}
			</div>
			{
				loading && !comic && <h2>Loading...</h2>
			}
			{
				err && <Navigate to="/nopage" replace />
			}
		</section>
	)
}

export default Comic