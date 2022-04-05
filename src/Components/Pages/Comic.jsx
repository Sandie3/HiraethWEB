import React, { useState, useEffect, Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
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

	}, [] )


	return (
		<section>
			<div className='comic'>
				{
					comic &&
					<>
						<div className="comicTop">
							<div className="comicHero">
								<img src={ comic.images[ 0 ].path } alt={ comic.title + " image" } />
							</div>
							<div className="comicInfo">
								<h1 className='comicTitle'>{ comic.title }</h1>
								<p className='comicDescription'>{ comic.description }</p>
								<div className='comicTags'>
									<span>Tags</span><br /><br />
									{
										tags &&
										tags.map( ( t, i ) => <a key={ i } href="">{ t }</a> )
									}
								</div>
							</div>
						</div>
						<div className="comicBottom">
							{
								comic.images.map( ( c, i ) => {
									return (
										<Fragment key={ i }>
											<img src={ imgUrl + c.destination + "thumbnail/thumb-" + c.filename } alt={ comic.title + " image" } />
										</Fragment>
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