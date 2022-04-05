import React from 'react'
import { Link } from 'react-router-dom'
import { imgUrl } from '../Helpers/Api'

const ComicThumbs = ( { comic } ) => {
	return (
		<>
			<div className='comicWrap'>
				<div className="comicImgWrap">
					<Link to={ "/comic/" + comic._id }>
						<img src={ imgUrl + comic.images[ 0 ].destination + "thumbnail/thumb-" + comic.images[ 0 ].filename } alt={ comic.title + " image" } />
					</Link>
				</div>
				<div className="comicTitle">
					<h1>{ comic.title }</h1>
				</div>
				<div className="comicTitleShadow">
				</div>
			</div>
		</>
	)
}

export default ComicThumbs