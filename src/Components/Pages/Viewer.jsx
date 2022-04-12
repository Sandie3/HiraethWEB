import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getComic } from '../Helpers/Comic'
import ViewerWrapper, { ViewerItem } from '../Partials/ViewerItem'

const Viewer = () => {

	const params = useParams()

	const [ comic, setComic ] = useState()
	const [ loading, setLoading ] = useState( false )
	const [ err, setErr ] = useState()

	useEffect( () => {
		getComic( params.comic ).then( res => {
			if ( res ) {
				setComic( res )
				console.log( res )
				document.title = "Hiraeth | " + res.title
				setErr()
			} else {
				setErr( true )
				setComic()
			}
			setLoading( false )
		} )

	}, [params.comic] )

	return (
		<section>
			{
				comic &&
				<ViewerWrapper>
					{
						comic.images.map( ( c, i ) => {
							return (
								<ViewerItem key={ c.filename.split( "." )[ 0 ] }>
									<img src={ c.path } alt={ c.filename } />
								</ViewerItem>
							)
						} )
					}
				</ViewerWrapper>
			}
			{
				loading && !err &&
				<>Loading....</>
			}
			{
				err && <Navigate to="/nopage" replace />
			}
		</section>
	)
}

export default Viewer